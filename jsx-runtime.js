var preact = require('preact');

/**
 * @param {import('preact').ComponentType} type     Component type.
 * @param {import('preact').Attributes}    config   Component props.
 * @param {string=}                        maybeKey Key, or undefined.
 */
function jsx(type, config, maybeKey) {
  var props = {},
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
