class Badger {
    constructor(
        name,
        hairColor,
        gender,
        age,
        willBite = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.hairColor = hairColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.willBite = willBite
        this.weight = weight || 0
    };
}

export default Badger