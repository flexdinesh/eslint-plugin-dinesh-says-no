# eslint-plugin-dinesh-says-no

things dinesh will say no to

## WHY

This is an example eslint plugin developed for my talk at React Sydney on Nov 4, 2019.

## Installation

First, checkout this repo to a local directory: Eg. `workspace/eslint-plugin-dinesh-says-no`

Next, install the plugin locally by using the right local path:

```
$ yarn add ../eslint-plugin-dinesh-says-no --dev
```

## Usage

Add `dinesh-says-no` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["dinesh-says-no"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "dinesh-says-no/no-cats": "error"
  }
}
```

## Supported Rules

- no-cats
