"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multiply_Command {
    constructor(name, program) {
        this.program = program;
        this.name = name;
    }
    register() {
        this.program
            .command("multiply <n1> <n2>")
            .description("Multiply two numbers")
            .action((n1, n2) => {
            this.multiply(n1, n2);
        });
    }
    multiply(n1, n2) {
        console.log(Number(n1) * Number(n2));
    }
}
exports.default = Multiply_Command;
