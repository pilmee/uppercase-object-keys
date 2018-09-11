# UPPERCASE OBJECT KEYS 

[![Build Status](https://travis-ci.org/pilmee/uppercase-object-keys.svg?branch=master)](https://travis-ci.org/pilmee/uppercase-object-keys) [![Dependencies Status](https://david-dm.org/pilmee/uppercase-object-keys.svg)](https://david-dm.org/pilmee/uppercase-object-keys.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Greenkeeper badge](https://badges.greenkeeper.io/pilmee/uppercase-object-keys.svg)](https://greenkeeper.io/)

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
