class Otter {
    constructor(
        name,
        furColor,
        gender,
        age,
        canSwim = true,
        skilledBuilder = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canSwim = canSwim
        this.skilledBuilder = skilledBuilder
        this.weight = weight || 0
    };
}

export default Otter