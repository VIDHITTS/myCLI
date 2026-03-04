"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class Joke_Command {
    constructor(name, program) {
        this.program = program;
        this.name = name;
    }
    register() {
        this.program
            .command("joke")
            .description("Random Joke")
            .action(async () => {
            await this.getJoke();
        });
    }
    async getJoke() {
        try {
            const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            const { setup, punchline } = res.data;
            console.log(chalk_1.default.cyan(`\nSetup: ${setup}`));
            // Using a promise-based delay to ensure the sequence in tests or async contexts
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(chalk_1.default.yellow(`Punchline: ${punchline}\n`));
        }
        catch (err) {
            console.log(chalk_1.default.red("Failed to fetch joke."));
        }
    }
}
exports.default = Joke_Command;
