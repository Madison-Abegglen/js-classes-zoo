class Vulture {
    constructor(
        name,
        featherColor,
        gender,
        age,
        canFly = true,
        willEatYou = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.featherColor = featherColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.canFly = canFly
        this.willEatYou = willEatYou
        this.weight = weight || 0
    };
}

export default Vulture