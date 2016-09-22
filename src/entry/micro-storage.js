microStorage.version = '@VERSION';

/**
 * A lite localStorage plugin with namespace
 * @param  {String} namespace namespace
 * @return {Function} function
 */
function microStorage ( namespace ) {
    /**
    * Get or set value from storage
    * @param  {String} name key
    * @param  {AnyType} value value
    * @return {AnyType} value
    */
    return function storage ( name, value ) {
        if (arguments.length == 0) {
            return;
        }
        if (arguments.length == 1) {
            let result = JSON.parse(localStorage.getItem(`${ namespace }.${ name }`));
            return result ? result.$ : result;
        }
        localStorage.setItem(`${ namespace }.${ name }`, JSON.stringify({ $ : value }));
        return value;
    }
}

module.exports = microStorage;
