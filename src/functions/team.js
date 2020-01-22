import { shuffle } from '../helpers/shuffle';
import { log } from '../helpers/log';
import { randomInt } from '../helpers/randomInt';

function team(msg, args, client) {
    console.log(log(msg));

    let team1 = [];
    let team2 = [];

    if (args.length == 0) {
        return "Input something";
    }

    args = shuffle(args);

    args.forEach(element => {
        if (element.startsWith("<@!") && element.endsWith(">")) {
            let id = client.users.get(element.split("!")[1].split(">")[0]);
            let guild = msg.guild;
            element = guild.member(id).nickname
            if (element == null) {
                element = id.username;
            }
        }
        if (team1.length >= args.length / 2) {
            team2.push(element);
        }
        else if (team2.length >= args.length / 2) {
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
    description: '> Usage:\n!team [arguments]',
    execute: team,
};