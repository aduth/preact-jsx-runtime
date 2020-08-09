# Preact JSX Runtime

This module serves as an entrypoint for automatic JSX import using [Preact](https://preactjs.com/). It enables you to use [`@babel/preset-react`'s `runtime: 'automatic'` option](https://babeljs.io/docs/en/next/babel-preset-react.html#both-runtimes) by assigning `'preact-jsx-runtime'` as the [`importSource` option](https://babeljs.io/docs/en/next/babel-preset-react.html#importsource). In the future, Preact may offer this out-of-the-box.

For more information, refer to the following resources:

- https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#auto-import
- https://github.com/babel/babel/pull/11154
- https://github.com/facebook/react/pull/18299
- https://github.com/preactjs/preact/pull/2389

## Installation

Because `preact` is defined as a peer dependency, make sure that it's installed if it is not already:

```
npm install preact
```

Then, install `preact-jsx-runtime`.

```
npm install preact-jsx-runtime
```

It should be installed as a regular dependency (_not_ a development dependency), since the transformed code will import using `preact-jsx-runtime` as a proxy to Preact.

## Usage

You will most likely want to assign this as the `importSource` option of [`@babel/preset-react`](https://babeljs.io/docs/en/next/babel-preset-react.html#importsource).

An example Babel configuration might look like:

```json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "preact-jsx-runtime"
      }
    ]
  ]
}
```

## License

Copyright 2020 Andrew Duthie

Released under the MIT License. See [LICENSE.md](./LICENSE.md).
