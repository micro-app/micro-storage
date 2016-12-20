/*!
 * @ProjectName micro-storage
 * @Version 0.0.9
 * @Author lixinliang(https://github.com/lixinliang)
 * @Update 2016-12-20 10:28:38 am
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["microStorage"] = factory();
	else
		root["microStorage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @webpack
	 * @library microStorage
	 * @libraryTarget umd
	 */

	microStorage.version = ("0.0.9");

	var packageName = ("micro-storage");
	var list = JSON.parse(localStorage.getItem(packageName)) || {};

	/**
	 * A lite localStorage plugin with namespace
	 * @param {String} namespace namespace
	 * @return {Function} function
	 */
	function microStorage(namespace) {

	    list[namespace] = list[namespace] || {};
	    localStorage.setItem(packageName, JSON.stringify(list));

	    /**
	    * Get or set value from storage
	    * @param {String} name key
	    * @param {AnyType} value value
	    * @return {AnyType} value
	    */
	    function storage(name, value) {
	        if (arguments.length == 0) {
	            return;
	        }
	        if (arguments.length == 1) {
	            var result = JSON.parse(localStorage.getItem(namespace + '.' + name));
	            return result ? result.$ : result;
	        }
	        localStorage.setItem(namespace + '.' + name, JSON.stringify({ $: value }));
	        list[namespace][name] = '';
	        localStorage.setItem(packageName, JSON.stringify(list));
	        return value;
	    };

	    /**
	    * Remove value from storage
	    * @param {String} name key
	    */
	    storage.remove = function (name) {
	        localStorage.removeItem(namespace + '.' + name);
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
	        var _this = this;

	        this.list().forEach(function (name) {
	            _this.remove(name);
	        });
	    };

	    return storage;
	}

	module.exports = microStorage;

/***/ }
/******/ ])
});
;