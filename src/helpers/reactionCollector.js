async function reactionCollector(msg, client, num, emoji, time) {
    let filter = (reaction) => {
        return reaction.emoji.name === emoji;
    }

    return await msg.channel.send(`> <@!${msg.author.id}> has started a headcount here!\n> Collection will time out in ${time / 60000} minutes.\n> React here with ${emoji}.`)
        .then(sentMessage => {
            sentMessage.react(emoji)

            function removeReaction(sentMessage, client, emoji) {
                sentMessage.reactions.get(emoji).remove(client.user.id);
            }
            setTimeout(removeReaction, 60000, sentMessage, client, emoji);

            return sentMessage.awaitReactions(filter, { max: num + 1, time: time, errors: ['time'] })
                .then(collected => {
                    let map = collected.get(emoji).users.keys();
                    let idList = Array.from(map);
                    idList.splice(idList.indexOf(client.user.id), 1);
                    msg.channel.send("Headcount completed!");
                    return idList;
                })
                .catch(collected => {
                    msg.channel.send(`After 1 hour, only ${collected.size} out of ${num} reacted.`);
                })
        });
}

//TODO: UNIQUE REACTIONS COUNT ONLY

export { reactionCollector };