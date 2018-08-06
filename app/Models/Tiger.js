class Tiger {
    constructor(
        name,
        hairColor,
        gender,
        claws = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.hairColor = hairColor || ''
        this.gender = gender || ''
        this.claws = claws
        this.weight = weight || 0
    }
}

export default Tiger