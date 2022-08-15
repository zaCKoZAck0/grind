fs = require('fs');
const { exec } = require("child_process");

const header = "# Grind :zap:\n### Keeping a record of all the Questions I solve daily, so I don't slack off.\n"
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
tillDate = today.toDateString();

var fromDate = new Date("8/11/2022");
var diffDays = parseInt((today - fromDate) / (1000 * 60 * 60 * 24), 10) + 1;

const hr = "\n---\n"

const date = hr +
    "> From: Thu Aug 11 2022" +
    hr + hr +
    `> Till: ${tillDate}` +
    hr;
const streak = "\n" + `**Streak: ${diffDays} days** :fire:`

const qnHeader = "\n\n### Latest Question Explanation :octopus:\n"


let explaination = "";
let questions = "";

try {
    let data = fs.readFileSync('explaination.md', 'utf8');
    explaination = data;
    data = fs.readFileSync('questions.md', 'utf8');
    questions = data;
    let res=data.toString().split('\n').length;
    console.log(res)
} catch (err) {
    console.error(err);
}



fs.writeFileSync('readme.md', header + date + streak + qnHeader + explaination + questions, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});

class os_func {
    constructor() {
        this.execCommand = function (cmd) {
            return new Promise((resolve, reject) => {
                exec(cmd, (error, stdout, stderr) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(stdout);
                });
            });
        };
    }
}
var os = new os_func();

os.execCommand('git add .').then(res => {
    console.log("git add gives: ", res);
    os.execCommand(`git commit -m "day: ${diffDays}"`).then(res => {
        console.log("git commit gives: ", res);
        os.execCommand(`git push`).then(res => {
            console.log("git push gives: ", res);
        }).catch(err => {
            console.log("git push gives error: ", err);
        })
    }).catch(err => {
        console.log("git commit gives error: ", err);
    })
}).catch(err => {
    console.log("git add gives error: ", err);
})
