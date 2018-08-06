class Antelope {
    constructor(
        name,
        hairColor,
        gender,
        age,
        hasHorns = false,
        leftHornLength = 0,
        rightHornLength = 0,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.hairColor = hairColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.hasHorns = hasHorns
        this.horns = {
            left: leftHornLength,
            right: rightHornLength
        }
        this.weight = weight || 0
    };

    totalHornLength() {
        return this.horns.left + this.horns.right
    }
}

export default Antelope