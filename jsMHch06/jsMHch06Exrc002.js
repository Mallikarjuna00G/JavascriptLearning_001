console.time("ExecutionTime");

class Group {
    #members = [];

    add(element) {
        if(!this.has(element)) {this.#members.push(element); }
    }

    delete(element) {
        this.#members = this.#members.filter(function(member){return member !== element; });
    }

    has(element) {
        return this.#members.indexOf(element) !== -1;
    }

    static from(arr) {
        let group = new Group();
        for (let a of arr) {
            group.add(a);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

console.timeEnd("ExecutionTime");