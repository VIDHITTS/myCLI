"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
class Init_TS {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('init_ts <folderName>')
            .description('Initialize a new TypeScript project in a folder')
            .action((folderName) => this.initialize(folderName));
    }
    initialize(folderName) {
        console.log(chalk_1.default.blue(`Initializing TypeScript project in: ${folderName}`));
        try {
            (0, child_process_1.execSync)(`mkdir ${folderName}`, { stdio: "inherit" });
            (0, child_process_1.execSync)(`cd ${folderName} && npm init -y`, { stdio: "inherit" });
            (0, child_process_1.execSync)(`cd ${folderName} && npm install -D typescript ts-node nodemon @types/node`, { stdio: "inherit" });
            (0, child_process_1.execSync)(`cd ${folderName} && npx tsc --init`, { stdio: "inherit" });
            console.log(chalk_1.default.green(`TypeScript project ${folderName} initialized successfully!`));
        }
        catch (error) {
            console.error(chalk_1.default.red("Failed to initialize project:"), error);
        }
    }
}
exports.default = Init_TS;
