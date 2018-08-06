class Horse {
    constructor(
        name,
        hairColor,
        gender,
        age,
        type,
        willBite = false,
        height = 0,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.hairColor = hairColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.type = type || ''
        this.willBite = willBite
        this.height = height || 0
        this.weight = weight || 0
    };
}

export default Horse