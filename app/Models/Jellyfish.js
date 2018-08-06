class Jellyfish {
    constructor(
        name,
        color,
        gender,
        age,
        willSting = true,
        tentacles = 0,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.age = age || ''
        this.willSting = willSting
        this.tentacles = tentacles || 0
        this.weight = weight || 0
    };
}

export default Jellyfish