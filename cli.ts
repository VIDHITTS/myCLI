#!/usr/bin/env node
import { Command } from "commander";

import Greet_Command from "./commands/greetCommand";
import Add_Command from "./commands/addCommand";
import Subtract_Command from "./commands/subtractCommand";
import Multiply_Command from "./commands/multiplyCommand";
import Divide_Command from "./commands/divideCommand";
import Joke_Command from "./commands/jokeCommand";
import Weather_Command from "./commands/weatherCommand";
import Quote_Command from "./commands/quoteCommand";
import Pokemon_Command from "./commands/pokemonCommand";
import Country_Command from "./commands/countryCommand";
import FileInfo_Command from "./commands/fileInfoCommand";
import Init_TS from "./commands/init";

class CLI_Engine {
  program: InstanceType<typeof Command>;

  constructor() {
    this.program = new Command();
    this.program
      .name("mycli")
      .description("A functional TypeScript CLI tool")
      .version("1.0.0");
  }

  register() {
    const commands = [
      new Greet_Command("greet", this.program),
      new Add_Command("add", this.program),
      new Subtract_Command("subtract", this.program),
      new Multiply_Command("multiply", this.program),
      new Divide_Command("divide", this.program),
      new Joke_Command("joke", this.program),
      new Weather_Command("weather", this.program),
      new Quote_Command("quote", this.program),
      new Pokemon_Command("pokemon", this.program),
      new Country_Command("country", this.program),
      new FileInfo_Command("fileinfo", this.program),
      new Init_TS(this.program),
    ];
    commands.forEach((cmd) => cmd.register());
    this.program.parse();
  }
}

const engine = new CLI_Engine();
engine.register();
