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
    "> Thu Aug 11 2022" +
    hr + hr +
    `> ${tillDate}` +
    hr;
const streak = `**Streak: ${diffDays} days** :fire:`

const qnHeader = "\n\n### Latest Question Explanation :octopus:\n"




fs.writeFileSync('helloworld.md', header + date + streak + qnHeader, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});

class os_func {
    constructor () {
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

os.execCommand('git add .').then(res=> {
    os.execCommand(`git commit -m "day: ${diffDays}"`).then(res=> {
        console.log("git commit gives: ", res);
    }).catch(err=> {
        console.log("git commit gives error: ", err);
    })
    console.log("git add gives: ", res);
}).catch(err=> {
    console.log("git add gives error: ", err);
})
