class Iguana {
    constructor(
        name,
        skinColor,
        gender,
        age,
        stickyFeet = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.skinColor = skinColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.stickyFeet = stickyFeet
        this.weight = weight || 0
    };
}

export default Iguana