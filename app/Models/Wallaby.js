class Wallaby {
    constructor(
        name,
        furColor,
        gender,
        age,
        hasNeatPocket = true,
        isBouncy = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.hasNeatPocket = hasNeatPocket
        this.isBouncy = isBouncy
        this.weight = weight || 0
    };
}

export default Wallaby