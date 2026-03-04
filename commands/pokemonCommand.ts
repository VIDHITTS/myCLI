import axios from "axios";
import chalk from "chalk";

class Pokemon_Command {
  name: string;
  program: any;

  constructor(name: string, program: any) {
    this.name = name;
    this.program = program;
  }

  register() {
    this.program
      .command("pokemon <name>")
      .description("Get information about a Pokemon")
      .action(async (name: string) => {
        await this.getPokemon(name.toLowerCase());
      });
  }

  async getPokemon(name: string) {
    try {
      console.log(chalk.blue(`Searching for Pokemon: ${name}...`));
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      );
      const { height, weight, types, abilities } = response.data;

      console.log(chalk.yellow(`\n--- ${name.toUpperCase()} ---`));
      console.log(`Height: ${height}`);
      console.log(`Weight: ${weight}`);
      console.log(`Types: ${types.map((t: any) => t.type.name).join(", ")}`);
      console.log(
        `Abilities: ${abilities.map((a: any) => a.ability.name).join(", ")}\n`,
      );
    } catch (error) {
      console.error(chalk.red("Pokemon not found."));
    }
  }
}

export default Pokemon_Command;
