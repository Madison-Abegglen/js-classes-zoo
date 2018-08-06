class Kiwi {
    constructor(
        name,
        featherColor,
        gender,
        age,
        canFly = false,
        willBite = false,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.featherColor = featherColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canFly = canFly
        this.willBite = willBite
        this.weight = weight || 0
    };
}

export default Kiwi