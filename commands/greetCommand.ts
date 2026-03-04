const chalk=require("chalk")
class Greet_Command {
  name;
  program;
  constructor(name, program) {
    this.program = program;
    this.name = name;
  }

  register() {
    this.program.command("greet <name>").action((name) => {
      this.sayHello(name);
    });
  }
  sayHello(name) {
    console.log(chalk.green(`Hello ${name}`));
  }
}

export default Greet_Command;
