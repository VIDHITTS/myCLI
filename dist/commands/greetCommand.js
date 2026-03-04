"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Greet_Command {
    constructor(name, program) {
        this.program = program;
        this.name = name;
    }
    register() {
        this.program.command("greet <name>").action((name) => {
            this.sayHello(name);
        });
    }
    sayHello(name) {
        console.log(chalk.green(`Hello ${name}`));
    }
}
exports.default = Greet_Command;
