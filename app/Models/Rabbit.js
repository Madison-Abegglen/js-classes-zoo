class Rabbit {
    constructor(
        name,
        furColor,
        gender,
        age,
        willBite = true,
        isBouncy = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.willBite = willBite
        this.isBouncy = isBouncy
        this.weight = weight || 0
    };
}

export default Rabbit