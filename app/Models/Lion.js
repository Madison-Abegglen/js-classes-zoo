class Lion {
    constructor(
        name,
        hairColor,
        gender,
        maneColor,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.hairColor = hairColor || ''
        this.gender = gender || ''
        this.maneColor = maneColor || ''
        this.weight = weight || 0
    }
}

export default Lion