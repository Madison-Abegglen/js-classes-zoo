class UmbrellaBird {
    constructor(
        name,
        featherColor,
        gender,
        age,
        canFly = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.featherColor = featherColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canFly = canFly
        this.weight = weight || 0
    };
}

export default UmbrellaBird