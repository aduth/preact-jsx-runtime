var preact = require("preact");

function jsx(type, config, maybeKey) {
  var props = {},
    propName;

  if (maybeKey !== undefined) {
    props.key = "" + maybeKey;
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
