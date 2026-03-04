import axios from "axios";

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
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
}

export default Joke_Command;
