/**
 * @webpack
 * @library microStorage
 * @libraryTarget umd
 */

microStorage.version = '@VERSION';

let packageName = '@NAME';
let list = JSON.parse(localStorage.getItem(packageName)) || {};

/**
 * A lite localStorage plugin with namespace
 * @param {String} namespace namespace
 * @return {Function} function
 */
function microStorage ( namespace ) {

    list[namespace] = list[namespace] || {};
    localStorage.setItem(packageName, JSON.stringify(list));

    /**
    * Get or set value from storage
    * @param {String} name key
    * @param {AnyType} value value
    * @return {AnyType} value
    */
    function storage ( name, value ) {
        if (arguments.length == 0) {
            return;
        }
        if (arguments.length == 1) {
            let result = JSON.parse(localStorage.getItem(`${ namespace }.${ name }`));
            return result ? result.$ : result;
        }
        localStorage.setItem(`${ namespace }.${ name }`, JSON.stringify({ $ : value }));
        list[namespace][name] = '';
        localStorage.setItem(packageName, JSON.stringify(list));
        return value;
    };

    /**
    * Remove value from storage
    * @param {String} name key
    */
    storage.remove = function ( name ) {
        localStorage.removeItem(`${ namespace }.${ name }`);
        delete list[namespace][name];
        localStorage.setItem(packageName, JSON.stringify(list));
    };

    /**
     * Return value list of storage
     * @return {Array} list list of storage
     */
    storage.list = function () {
        return Object.keys(list[namespace]);
    };

    /**
     * Clear all value from storage
     */
    storage.clear = function () {
        this.list().forEach(( name ) => {
            this.remove(name);
        });
    };

    return storage;
}

module.exports = microStorage;
