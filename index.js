// Add your Circle class here

class Circle {
    constructor (r) {
        this.radius = r
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newdiameter) {
        this.radius = newdiameter / 2
    }

    get circumference() {
        return 2 * 3.14 * this.radius
    }

    set circumference(circ) {
        this.radius = circ / 3.14 / 2
    }

    get area() {
        return 3.14 * (this.radius * this.radius)
    }

    set area(area) {
        this.radius = Math.sqrt(area / 3.14)
    }
}