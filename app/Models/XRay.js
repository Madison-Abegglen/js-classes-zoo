class XRay {
    constructor(
        name,
        color,
        gender,
        age,
        willSting = true,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.age = age || ''
        this.willSting = willSting
        this.weight = weight || 0
    };
}

export default XRay