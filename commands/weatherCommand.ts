import axios from "axios";
import chalk from "chalk";

class Weather_Command {
  name: string;
  program: any;

  constructor(name: string, program: any) {
    this.name = name;
    this.program = program;
  }

  register() {
    this.program
      .command("weather <city>")
      .description("Get weather info for a city")
      .action(async (city: string) => {
        await this.getWeather(city);
      });
  }

  async getWeather(city: string) {
    try {
      console.log(chalk.blue(`Fetching weather for ${city}...`));
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
      const data = response.data.current_condition[0];
      console.log(chalk.green(`City: ${city}`));
      console.log(chalk.yellow(`Temperature: ${data.temp_C}°C`));
      console.log(chalk.yellow(`Condition: ${data.weatherDesc[0].value}`));
      console.log(chalk.yellow(`Humidity: ${data.humidity}%`));
    } catch (error) {
      console.error(
        chalk.red("Error fetching weather data. Please check the city name."),
      );
    }
  }
}

export default Weather_Command;
