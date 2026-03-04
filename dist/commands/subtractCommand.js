"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subtract_Command {
    constructor(name, program) {
        this.program = program;
        this.name = name;
    }
    register() {
        this.program
            .command("subtract <n1> <n2>")
            .description("Subtract two numbers")
            .action((n1, n2) => {
            this.subtract(n1, n2);
        });
    }
    subtract(n1, n2) {
        console.log(Number(n1) - Number(n2));
    }
}
exports.default = Subtract_Command;
