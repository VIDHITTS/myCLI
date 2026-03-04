"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
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
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = Joke_Command;
