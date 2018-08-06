class Manatee {
    constructor(
        name,
        skinColor,
        gender,
        age,
        livesInWater = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.skinColor = skinColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.livesInWater = livesInWater
        this.weight = weight || 0
    };
}

export default Manatee