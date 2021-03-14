const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);
        this.gitHub = gitHub;
    }

    getRole() {
        return `Engineer`;
    }

    getGitHub() {
        return `${this.gitHub}`;
    }
}

module.exports = Engineer;