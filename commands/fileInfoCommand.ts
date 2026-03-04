import chalk from "chalk";
import * as fs from "fs";
import * as path from "path";

class FileInfo_Command {
    name: string;
    program: any;

    constructor(name: string, program: any) {
        this.name = name;
        this.program = program;
    }

    register() {
        this.program
            .command("fileinfo <filename>")
            .description("Get basic info about a file")
            .action((filename: string) => {
                this.getFileInfo(filename);
            });
    }

    getFileInfo(filename: string) {
        const filePath = path.resolve(process.cwd(), filename);
        if (!fs.existsSync(filePath)) {
            console.error(chalk.red(`File not found: ${filename}`));
            return;
        }

        const stats = fs.statSync(filePath);
        console.log(chalk.cyan(`\n--- File Info: ${filename} ---`));
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`Last Modified: ${stats.mtime}`);
        console.log(`Is Directory: ${stats.isDirectory()}\n`);
    }
}

export default FileInfo_Command;
