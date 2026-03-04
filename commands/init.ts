const (execSync) = require("child_proceses")
const chalk=require("chalk")
class Init_TS{
    program;
    constructor(program){
        this.program=program
    }
    register(){
        this.program
        .command('init_ts <folderName>')
        .action((folderName)=>this.initialize(folderName))
    }
    initialize(folderName){
        console.log(chalk.blue("initialize typescript project"))
        this.run(`mkdir ${folderName}`)
        this.run(`cd ${folderName} && npm init -y`)
        this.run(`cd ${folderName} && npm install -D typescrpit ts-node nodemon @types/node`)
        console.log(chalk.blue("ts project initiates"))
    }
    run(command){
        execSync(command,{stdio:"inherit"})
    }
}