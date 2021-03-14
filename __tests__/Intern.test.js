const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// check new intern creation
test('creates a new intern', () => {
    const intern = new Intern();
    expect(typeof (intern)).toBe('object');
});