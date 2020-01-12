function separate(string) {
    return string.match(/\S+/g) || []
}

export { separate };