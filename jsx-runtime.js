var preact = require('preact');

/** @typedef {import('preact').ComponentType} ComponentType */
/** @typedef {import('preact/src/jsx').JSXInternal.HTMLAttributes} HTMLAttributes */
/** @typedef {import('preact/src/jsx').JSXInternal.SVGAttributes} SVGAttributes */
/** @typedef {HTMLAttributes & SVGAttributes & Record<string, any>} Props

/**
 * @param {ComponentType} type     Component type.
 * @param {Props}         config   Component props.
 * @param {string=}       maybeKey Key, or undefined.
 */
function jsx(type, config, maybeKey) {
  var props = /** @type {Props} */ ({}),
    propName;

  if (maybeKey !== undefined) {
    props.key = '' + maybeKey;
  }

  for (propName in config) {
    if (Object.prototype.hasOwnProperty.call(config, propName)) {
      props[propName] = config[propName];
    }
  }

  return preact.createElement(type, props);
}

module.exports = {
  Fragment: preact.Fragment,
  jsx: jsx,
  jsxs: jsx,
};
