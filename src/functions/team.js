import { shuffle } from '../helpers/shuffle';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';
import { randomInt } from '../helpers/randomInt';

function team(msg, client) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);
    let team1 = [];
    let team2 = [];

    if (array.length == 0) {
        return "Input something";
    }

    array = shuffle(array);

    array.forEach(element => {
        if (element.includes("!")) {
            element = client.users.get(element.split("!")[1].split(">")[0]).username;
        }
        if (team1.length >= array.length / 2) {
            team2.push(element);
        }
        else if (team2.length >= array.length / 2) {
            team1.push(element);
        }
        else if (randomInt(0, 1)) {
            team1.push(element);
        }
        else {
            team2.push(element);
        }
    })

    return "```Team 1: " + team1.join(" | ") + "\n" + "Team 2: " + team2.join(" | ") + "```";
}

export { team };