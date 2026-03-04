import { execSync } from "child_process";
import chalk from "chalk";

class Init_TS {
  program: any;
  constructor(program: any) {
    this.program = program;
  }
  register() {
    this.program
      .command("init_ts <folderName>")
      .description("Initialize a new TypeScript project in a folder")
      .action((folderName: string) => this.initialize(folderName));
  }
  initialize(folderName: string) {
    console.log(
      chalk.blue(`Initializing TypeScript project in: ${folderName}`),
    );
    try {
      execSync(`mkdir ${folderName}`, { stdio: "inherit" });
      execSync(`cd ${folderName} && npm init -y`, { stdio: "inherit" });
      execSync(
        `cd ${folderName} && npm install -D typescript ts-node nodemon @types/node`,
        { stdio: "inherit" },
      );
      execSync(`cd ${folderName} && npx tsc --init`, { stdio: "inherit" });
      console.log(
        chalk.green(
          `TypeScript project ${folderName} initialized successfully!`,
        ),
      );
    } catch (error) {
      console.error(chalk.red("Failed to initialize project:"), error);
    }
  }
}

export default Init_TS;
