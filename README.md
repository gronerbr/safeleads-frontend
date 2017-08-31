
## Kitado SPA boilerplate

Project to start every SPA at Kitado.

### Sumary

- [Components layer](#components-layer)
- [Pages layer](#pages-layer)
- [Services layer](#services-layer)


### Components layer

Every new component created must follow the pattern of having `.jsx` extension and be in camel case and should be placed inside a folder in the same pattern.

```
➜  kitado-spa-boilerplate (master) ✔ tree -L 3 src/components
src/components
└── KtdHeader
    └── KtdHeader.jsx

1 directory, 1 file
```

[back to top](#kitado-spa-boilerplate)

### Pages layer

Pages are generally wrappers and will also be used as containers, every new page created must follow the pattern of having `.jsx` extension and be in camel case.

```
➜  kitado-spa-boilerplate (master) ✔ tree -L 3 src/pages     
src/pages
├── About.jsx
└── Home.jsx

0 directories, 2 files
```

[back to top](#kitado-spa-boilerplate)

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

Every `request` will be intermediated and will be in the `RequestFather`, when you need to implement a new request, you will create a new folder with the class name inside the strategies folder.

Each request will be a strategy and will have to extend from `AbstractInterface` which will provide methods that will be required to make` requests` and communication with the Web Socket.

[back to top](#kitado-spa-boilerplate)
