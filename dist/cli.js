#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const greetCommand_1 = __importDefault(require("./commands/greetCommand"));
const addCommand_1 = __importDefault(require("./commands/addCommand"));
const subtractCommand_1 = __importDefault(require("./commands/subtractCommand"));
const multiplyCommand_1 = __importDefault(require("./commands/multiplyCommand"));
const divideCommand_1 = __importDefault(require("./commands/divideCommand"));
const jokeCommand_1 = __importDefault(require("./commands/jokeCommand"));
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
    }
    register() {
        const commands = [
            new greetCommand_1.default("greet", this.program),
            new addCommand_1.default("add", this.program),
            new subtractCommand_1.default("subtract", this.program),
            new multiplyCommand_1.default("multiply", this.program),
            new divideCommand_1.default("divide", this.program),
            new jokeCommand_1.default("joke", this.program),
        ];
        commands.forEach((cmd) => cmd.register());
        this.program.parse();
    }
}
const engine = new CLI_Engine();
engine.register();
