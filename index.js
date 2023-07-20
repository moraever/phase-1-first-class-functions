const chai = require("chai");
const spies = require("chai-spies")
chai.use(spies)

function receivesAFunction(callback) {
    callback();
}

function callbackFunction() {
    console.log("Callback function called.")
}

function beforeAll() {
    console.log("before all");
}

function returnsANamedFunction() {
    return beforeAll;
}

function returnsAnAnonymousFunction() {
    return function () {};
}