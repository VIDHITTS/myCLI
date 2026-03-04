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
const weatherCommand_1 = __importDefault(require("./commands/weatherCommand"));
const quoteCommand_1 = __importDefault(require("./commands/quoteCommand"));
const pokemonCommand_1 = __importDefault(require("./commands/pokemonCommand"));
const countryCommand_1 = __importDefault(require("./commands/countryCommand"));
const fileInfoCommand_1 = __importDefault(require("./commands/fileInfoCommand"));
const init_1 = __importDefault(require("./commands/init"));
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
        this.program
            .name("mycli")
            .description("A functional TypeScript CLI tool")
            .version("1.0.0");
    }
    register() {
        const commands = [
            new greetCommand_1.default("greet", this.program),
            new addCommand_1.default("add", this.program),
            new subtractCommand_1.default("subtract", this.program),
            new multiplyCommand_1.default("multiply", this.program),
            new divideCommand_1.default("divide", this.program),
            new jokeCommand_1.default("joke", this.program),
            new weatherCommand_1.default("weather", this.program),
            new quoteCommand_1.default("quote", this.program),
            new pokemonCommand_1.default("pokemon", this.program),
            new countryCommand_1.default("country", this.program),
            new fileInfoCommand_1.default("fileinfo", this.program),
            new init_1.default(this.program),
        ];
        commands.forEach((cmd) => cmd.register());
        this.program.parse();
    }
}
const engine = new CLI_Engine();
engine.register();
