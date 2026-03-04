import axios from "axios";
import chalk from "chalk";

class Quote_Command {
    name: string;
    program: any;

    constructor(name: string, program: any) {
        this.name = name;
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(async () => {
                await this.getQuote();
            });
    }

    async getQuote() {
        try {
            const response = await axios.get("https://zenquotes.io/api/random");
            const { q, a } = response.data[0];
            console.log(chalk.cyan(`\n"${q}"`));
            console.log(chalk.magenta(`- ${a}\n`));
        } catch (error) {
            console.error(chalk.red("Error fetching quote."));
        }
    }
}

export default Quote_Command;
