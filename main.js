import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: " Please Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select you opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select you opponent",
            choices: ["Attack", "Drink portion", "Run  for your Life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green.italic(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red.italic(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Winn!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.greenBright(`You Drink Health Portion Your fuel is${p1.fuel}`));
        }
        if (ask.opt == "Run  for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select you opponent",
            choices: ["Attack", "Drink portion", "Run  for your Life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green.italic(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red.italic(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Winn!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.greenBright(`You Drink Health Portion Your fuel is${p1.fuel}`));
        }
        if (ask.opt == "Run  for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select you opponent",
            choices: ["Attack", "Drink portion", "Run  for your Life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red.italic(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green.italic(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green.italic(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red.italic(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Winn!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.greenBright(`You Drink Health Portion Your fuel is${p1.fuel}`));
        }
        if (ask.opt == "Run  for your Life") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
