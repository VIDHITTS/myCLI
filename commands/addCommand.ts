class Add_Command {
  name;
  program;
  constructor(name, program) {
    this.program = program;
    this.name = name;
  }

  register() {
    this.program
      .command("add <n1> <n2>")
      .description("Add two numbers")
      .action((n1, n2) => {
        this.add(n1, n2);
      });
  }

  add(n1, n2) {
    console.log(Number(n1) + Number(n2));
  }
}

export default Add_Command;
