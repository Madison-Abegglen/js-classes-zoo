class Sheep {
    constructor(
        name,
        furColor,
        gender,
        age,
        type,
        willMunch = false,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.type = type || ''
        this.willMunch = willMunch
        this.weight = weight || 0
    };
}

export default Sheep