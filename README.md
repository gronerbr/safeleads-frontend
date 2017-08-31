
## Kitado SPA boilerplate

Project to start every SPA at Kitado.

### Services layer

The service architecture to communicate with the Valhalla follows the pattern of folders using the [Composite](https://en.wikipedia.org/wiki/Composite_pattern) and [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern) patterns.

```
➜  kitado-spa-boilerplate (master) ✗ tree -L 3 src/services
src/services
├── AbstractInterface.js
├── index.js
├── RequestFatherComposite.js
└── strategies
    ├── GetDebtors
    │   └── index.js
    └── index.js

2 directories, 5 files
```

Every request will be intermediated and will be in the `RequestFather`, when you need to implement a new request, you will create a new folder with the class name inside the strategies folder.

Each request will be a strategy and will have to extend from `AbstractInterface` which will provide methods that will be required to make` requests` and communication with the Web Socket.
