async function reactionCollector(msg, client, num, emoji, time) {
    let filter = (reaction) => {
        return reaction.emoji.name === emoji;
    }

    msg.react(emoji);
    msg.channel.send(`> <@!${msg.author.id}> has started a headcount!\n> Collection will time out in ${time / 60000} minutes.`);

    
    function removeReaction(msg, client, emoji) {
        msg.reactions.get(emoji).remove(client.user.id);
    }
    setTimeout(removeReaction, 60000, msg, client, emoji);

    return await msg.awaitReactions(filter, { max: num + 1, time: time, errors: ['time'] })
        .then(collected => {
            let map = collected.get(emoji).users.keys();
            let idList = Array.from(map);
            idList.splice(idList.indexOf(client.user.id), 1);
            msg.channel.send("@here headcount completed!");
            return idList;
        })
        .catch(collected => {
            msg.channel.send(`After 1 hour, only ${collected.size} out of ${num} reacted.`);
        })
}

//TODO: UNIQUE REACTIONS COUNT ONLY

export { reactionCollector };