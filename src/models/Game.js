class Game {
    constructor(id, result, steps, date,time) {
        this.id = id;
        this.result = result;
        this.steps = steps; 
        this.date = date;
        this.time = time;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setResult(result) {
        this.result = result;
    }

    getResult() {
        return this.result;
    }

    setSteps(steps) {
        this.steps = steps;
    }

    getSteps() {
        return this.steps;
    }

    setTime(time) {
        this.time = time;
    }

    getTime() {
        return this.time;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }
}

export default Game;