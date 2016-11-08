# micro-storage
> (<1kb) A lite localStorage plugin with namespace.

## Try it now

* [Live Demo](https://lixinliang.github.io/live-demo/micro-storage/)

## Getting started
```
$ npm install micro-storage
```

## How to use

#### Namespace
```javascript
var example = microStorage('myNamespace');
```

#### SetItem
```javascript
example('myKey', myValue);
```

#### GetItem
```javascript
example('myKey'); // myValue
```

#### RemoveItem
```javascript
example.remove('myKey');
```

#### ShowList
```javascript
example.list(); // ['myKey']
```

#### ClearItem
```javascript
example.clear();
```

## License

MIT
