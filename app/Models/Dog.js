class Dog {
    constructor(
        name,
        furColor,
        gender,
        age,
        breed,
        willBark = true,
        willBite = false,
        weight = 0
    ) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.age = age || ''
        this.breed = breed || ''
        this.willBark = willBark
        this.willBite = willBite
        this.weight = weight || 0
    };
}

export default Dog