function microStorage ( namespace ) {
    return function storage ( name, value ) {
        if (arguments.length == 0) {
            return;
        }
        if (arguments.length == 1) {
            return JSON.parse(localStorage.getItem(`${ namespace }.${ name }`)).$;
        }
        localStorage.setItem(`${ namespace }.${ name }`, JSON.stringify({ $ : value }));
        return value;
    }
}

module.exports = microStorage;

// window.microStorage = microStorage;
