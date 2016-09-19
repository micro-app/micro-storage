# micro-storage
> (<1kb) A lite localStorage plugin with namespace

## Try it now

* [Live Demo](https://lixinliang.github.io/live-demo/micro-storage/)

## Getting started
```
$ npm install micro-storage
```

## How to use

#### Namespace
```
var example = microStorage('myNamespace');
```

#### SetItem
```
example('myKey', myValue);
```

#### GetItem
```
example('myKey'); // myValue
```

## License

MIT
