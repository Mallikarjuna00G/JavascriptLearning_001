console.time("ExecutionTime");

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec2) {
        return new Vec(this.x + vec2.x, this.y + vec2.y);
    }

    minus(vec2) {
        return new Vec(this.x - vec2.x, this.y - vec2.y);
    }

    // Distance between two vector points is
    // distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)
    get length() {
        return Math.sqrt((this.x)**2 + (this.y)**2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

console.log("----------------------")
console.timeEnd("ExecutionTime");