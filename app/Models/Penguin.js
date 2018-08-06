class Penguin {
    constructor(
        name,
        featherColor,
        gender,
        age,
        canFly = false,
        willBite = 'maybe',
        waddles = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.featherColor = featherColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canFly = canFly
        this.willBite = willBite
        this.waddles = waddles
        this.weight = weight || 0
    };
}

export default Penguin