class Fox {
    constructor(
        name,
        furColor,
        gender,
        age,
        willYip = true,
        willBite = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.willYip = willYip
        this.willBite = willBite
        this.weight = weight || 0
    };
}

export default Fox