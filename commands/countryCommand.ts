import axios from "axios";
import chalk from "chalk";

class Country_Command {
  name: string;
  program: any;

  constructor(name: string, program: any) {
    this.name = name;
    this.program = program;
  }

  register() {
    this.program
      .command("country <name>")
      .description("Get information about a country")
      .action(async (name: string) => {
        await this.getCountry(name);
      });
  }

  async getCountry(name: string) {
    try {
      console.log(chalk.blue(`Fetching info for ${name}...`));
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`,
      );
      const data = response.data[0];

      console.log(chalk.green(`\n--- ${data.name.official} ---`));
      console.log(`Capital: ${data.capital?.[0] || "N/A"}`);
      console.log(`Region: ${data.region}`);
      console.log(`Population: ${data.population.toLocaleString()}`);
      console.log(
        `Languages: ${Object.values(data.languages || {}).join(", ")}`,
      );
      console.log(
        `Currencies: ${Object.values(data.currencies || {})
          .map((c: any) => c.name)
          .join(", ")}\n`,
      );
    } catch (error) {
      console.error(chalk.red("Country not found."));
    }
  }
}

export default Country_Command;
