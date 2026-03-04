class Divide_Command {
  name;
  program;
  constructor(name, program) {
    this.program = program;
    this.name = name;
  }

  register() {
    this.program
      .command("divide <n1> <n2>")
      .description("Divide two numbers")
      .action((n1, n2) => {
        this.divide(n1, n2);
      });
  }

  divide(n1, n2) {
    console.log(Number(n1) / Number(n2));
  }
}

export default Divide_Command;
