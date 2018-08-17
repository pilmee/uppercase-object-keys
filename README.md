# UPPERCASE OBJECT KEYS [![Build Status](https://travis-ci.org/pilmee/uppercase-object-keys.svg?branch=master)](https://travis-ci.org/pilmee/uppercase-object-keys)

Instruction that transforms the names of the properties of an object to uppercase.

## How to install?:
```bash
npm i uppercase-object-keys
```
```bash
npm i uppercase-object-keys --save-dev
```

## How to use?:
```javascript
var uppercaseObjectKeys = require('uppercase-object-keys');
var obj = { name: 'Nelida', Age: 30 };

console.log(uppercaseObjectKeys(obj));
//result: { NAME: 'Nelida', AGE: 30 };

```
