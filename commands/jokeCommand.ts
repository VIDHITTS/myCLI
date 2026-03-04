import axios from "axios";
import chalk from "chalk";

class Joke_Command {
  name;
  program;
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
      const res = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const { setup, punchline } = res.data;
      console.log(chalk.cyan(`\nSetup: ${setup}`));

      // Using a promise-based delay to ensure the sequence in tests or async contexts
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log(chalk.yellow(`Punchline: ${punchline}\n`));
    } catch (err) {
      console.log(chalk.red("Failed to fetch joke."));
    }
  }
}

export default Joke_Command;
