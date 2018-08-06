class Quail {
    constructor(
        name,
        featherColor,
        gender,
        age,
        canFly = true,
        isSpeedy = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.featherColor = featherColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canFly = canFly
        this.isSpeedy = isSpeedy
        this.weight = weight || 0
    };
}

export default Quail