#!/usr/bin/env node
import { Command } from "commander";

import Greet_Command from "./commands/greetCommand";
import Add_Command from "./commands/addCommand";
import Subtract_Command from "./commands/subtractCommand";
import Multiply_Command from "./commands/multiplyCommand";
import Divide_Command from "./commands/divideCommand";
import Joke_Command from "./commands/jokeCommand";

class CLI_Engine {
  program: InstanceType<typeof Command>;

  constructor() {
    this.program = new Command();
  }

  register() {
    const commands = [
      new Greet_Command("greet", this.program),
      new Add_Command("add", this.program),
      new Subtract_Command("subtract", this.program),
      new Multiply_Command("multiply", this.program),
      new Divide_Command("divide", this.program),
      new Joke_Command("joke", this.program),
    ];
    commands.forEach((cmd) => cmd.register());
    this.program.parse();
  }
}

const engine = new CLI_Engine();
engine.register();
