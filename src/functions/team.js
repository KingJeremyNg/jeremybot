import { shuffle } from '../helpers/shuffle';
import { log } from '../helpers/log';
import { randomInt } from '../helpers/randomInt';
import { reactionCollector } from '../helpers/reactionCollector';

async function team(msg, args, client) {
    console.log(log(msg));

    let list = args;
    let team1 = [];
    let team2 = [];

    if (list.length == 0) {
        return "Input something";
    }
    if (list.length == 1 && !isNaN(list[0])) {
        list = await reactionCollector(msg, client, parseInt(list[0]), "✅", 3600000);
        list.forEach(function(element, index) {
            this[index] = `<@!${element}>`;
        }, list);
    }

    list = shuffle(list);

    list.forEach(element => {
        if (element.startsWith("<@!") && element.endsWith(">")) {
            let id = client.users.get(element.split("!")[1].split(">")[0]);
            let guild = msg.guild;
            element = guild.member(id).nickname
            if (element == null) {
                element = id.username;
            }
        }

        if (team1.length >= list.length / 2) {
            team2.push(element);
        }
        else if (team2.length >= list.length / 2) {
            team1.push(element);
        }
        else if (randomInt(0, 1)) {
            team1.push(element);
        }
        else {
            team2.push(element);
        }
    })

    msg.channel.send("```Team 1: " + team1.join(" | ") + "\n" + "Team 2: " + team2.join(" | ") + "```");
}

export default {
    name: '!team',
    description: '> Usage:\n!team [arguments]\n!team [number]',
    execute: team,
};