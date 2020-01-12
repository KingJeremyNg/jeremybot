function log(msg) {
    return (msg.guild + " | " + msg.author.tag + " | " + msg.content);
}

export { log };