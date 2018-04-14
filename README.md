# eslint-plugin-brewyah

Standard ESLint configuration for the BrewYah application

## Usage Guide

First, within the package that you're adding linting to install [ESLint](http://eslint.org):
```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-brewyah` `peerDependencies`:
```
$ npm install eslint-plugin-react --save-dev
$ npm install eslint-plugin-react-html --save-dev
```

Lastly, install `eslint-plugin-brewyah`:
```
$ npm install eslint-plugin-brewyah --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-brewyah` globally.

**Note:** Don't do that ^

### .eslintrc.json
Extend the `recommended` configuration and add `brewyah` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

`.eslintrc.json`:
```json
{
  "extends": "plugin:brewyah/recommended",
  "plugins": ["brewyah"]
}
```

### package.json
Add a lint script to the `scripts` section of your `package.json` file.

`package.json`:
```json
{
    "scripts": {
        "lint": "eslint ./path/to/src/directory"
    }
}
```
