class Multiply_Command {
  name;
  program;
  constructor(name, program) {
    this.program = program;
    this.name = name;
  }

  register() {
    this.program
      .command("multiply <n1> <n2>")
      .description("Multiply two numbers")
      .action((n1, n2) => {
        this.multiply(n1, n2);
      });
  }

  multiply(n1, n2) {
    console.log(Number(n1) * Number(n2));
  }
}

export default Multiply_Command;
