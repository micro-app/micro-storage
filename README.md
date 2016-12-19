[![npm](https://img.shields.io/npm/l/micro-storage.svg?style=flat-square)](https://www.npmjs.org/package/micro-storage)
[![npm](https://img.shields.io/npm/v/micro-storage.svg?style=flat-square)](https://www.npmjs.org/package/micro-storage)
[![npm](https://img.shields.io/npm/dm/micro-storage.svg?style=flat-square)](https://www.npmjs.org/package/micro-storage)
[![bitHound Code](https://www.bithound.io/github/micro-app/micro-storage/badges/code.svg)](https://www.bithound.io/github/micro-app/micro-storage)

# micro-storage
> (<1kb) A lite localStorage plugin with namespace.

## Try it now

* [Live Demo](https://lixinliang.github.io/live-demo/micro-storage/)

## Getting started
```
$ npm install micro-storage
```

## How to use

#### #Namespace
> microStorage( namespace : String )

```js
let store = microStorage('namespace');
```

#### #SetItem
> store( key : String, value : anyType )

```js
store('myKey', myValue);
```

#### #GetItem
> store( key : String ) => value : anyType

```js
store('myKey'); // myValue
```

#### #RemoveItem
> store.remove( key : String )

```js
store.remove('myKey');
```

#### #ShowList
> store.list() => list : Array

```js
store.list(); // ['myKey']
```

#### #ClearItem

```js
store.clear();
```

## License

MIT
