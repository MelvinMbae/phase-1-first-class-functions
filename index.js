function receivesAFunction(callback) {
    return callback()

}
console.log(receivesAFunction(function () { return "Thankyou for shopping with us. Have a lovely day." }))

function returnsANamedFunction() {
    function namedFunction() { return }

    return namedFunction

}
returnsANamedFunction()

function returnsAnAnonymousFunction() {

    return function () {

    };

};
returnsAnAnonymousFunction()

