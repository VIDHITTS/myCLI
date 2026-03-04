"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class Pokemon_Command {
    constructor(name, program) {
        this.name = name;
        this.program = program;
    }
    register() {
        this.program
            .command("pokemon <name>")
            .description("Get information about a Pokemon")
            .action(async (name) => {
            await this.getPokemon(name.toLowerCase());
        });
    }
    async getPokemon(name) {
        try {
            console.log(chalk_1.default.blue(`Searching for Pokemon: ${name}...`));
            const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const { height, weight, types, abilities } = response.data;
            console.log(chalk_1.default.yellow(`\n--- ${name.toUpperCase()} ---`));
            console.log(`Height: ${height}`);
            console.log(`Weight: ${weight}`);
            console.log(`Types: ${types.map((t) => t.type.name).join(", ")}`);
            console.log(`Abilities: ${abilities.map((a) => a.ability.name).join(", ")}\n`);
        }
        catch (error) {
            console.error(chalk_1.default.red("Pokemon not found."));
        }
    }
}
exports.default = Pokemon_Command;
