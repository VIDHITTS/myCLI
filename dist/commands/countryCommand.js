"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class Country_Command {
    constructor(name, program) {
        this.name = name;
        this.program = program;
    }
    register() {
        this.program
            .command("country <name>")
            .description("Get information about a country")
            .action(async (name) => {
            await this.getCountry(name);
        });
    }
    async getCountry(name) {
        var _a;
        try {
            console.log(chalk_1.default.blue(`Fetching info for ${name}...`));
            const response = await axios_1.default.get(`https://restcountries.com/v3.1/name/${name}`);
            const data = response.data[0];
            console.log(chalk_1.default.green(`\n--- ${data.name.official} ---`));
            console.log(`Capital: ${((_a = data.capital) === null || _a === void 0 ? void 0 : _a[0]) || 'N/A'}`);
            console.log(`Region: ${data.region}`);
            console.log(`Population: ${data.population.toLocaleString()}`);
            console.log(`Languages: ${Object.values(data.languages || {}).join(", ")}`);
            console.log(`Currencies: ${Object.values(data.currencies || {}).map((c) => c.name).join(", ")}\n`);
        }
        catch (error) {
            console.error(chalk_1.default.red("Country not found."));
        }
    }
}
exports.default = Country_Command;
