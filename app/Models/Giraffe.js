class Giraffe {
    constructor(
        name,
        hairColor,
        gender,
        age,
        spotColor,
        height = 0,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.hairColor = hairColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.spotColor = spotColor || ''
        this.height = height || 0
        this.weight = weight || 0
    };
}

export default Giraffe