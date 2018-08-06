class Eagle {
    constructor(
        name,
        featherColor,
        gender,
        age,
        canFly = true,
        bald = true,
        willBite = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.featherColor = featherColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canFly = canFly
        this.bald = bald
        this.willBite = willBite
        this.weight = weight || 0
    };
}

export default Eagle