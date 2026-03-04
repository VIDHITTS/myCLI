"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class Weather_Command {
    constructor(name, program) {
        this.name = name;
        this.program = program;
    }
    register() {
        this.program
            .command("weather <city>")
            .description("Get weather info for a city")
            .action(async (city) => {
            await this.getWeather(city);
        });
    }
    async getWeather(city) {
        try {
            console.log(chalk_1.default.blue(`Fetching weather for ${city}...`));
            const response = await axios_1.default.get(`https://wttr.in/${city}?format=j1`);
            const data = response.data.current_condition[0];
            console.log(chalk_1.default.green(`City: ${city}`));
            console.log(chalk_1.default.yellow(`Temperature: ${data.temp_C}°C`));
            console.log(chalk_1.default.yellow(`Condition: ${data.weatherDesc[0].value}`));
            console.log(chalk_1.default.yellow(`Humidity: ${data.humidity}%`));
        }
        catch (error) {
            console.error(chalk_1.default.red("Error fetching weather data. Please check the city name."));
        }
    }
}
exports.default = Weather_Command;
