"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class Quote_Command {
    constructor(name, program) {
        this.name = name;
        this.program = program;
    }
    register() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(async () => {
            await this.getQuote();
        });
    }
    async getQuote() {
        try {
            const response = await axios_1.default.get("https://zenquotes.io/api/random");
            const { q, a } = response.data[0];
            console.log(chalk_1.default.cyan(`\n"${q}"`));
            console.log(chalk_1.default.magenta(`- ${a}\n`));
        }
        catch (error) {
            console.error(chalk_1.default.red("Error fetching quote."));
        }
    }
}
exports.default = Quote_Command;
