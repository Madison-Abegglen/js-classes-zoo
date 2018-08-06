class Yak {
    constructor(
        name,
        furColor,
        gender,
        age,
        willMunch = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.willMunch = willMunch
        this.weight = weight || 0
    };
}

export default Yak