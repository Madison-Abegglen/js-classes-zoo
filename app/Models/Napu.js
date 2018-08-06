class Napu {
    constructor(
        name,
        furColor,
        gender,
        age,
        canWiggleSnout = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canWiggleSnout = canWiggleSnout
        this.weight = weight || 0
    };
}

export default Napu