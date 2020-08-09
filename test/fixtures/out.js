"use strict";

var _jsxRuntime = require("preact-jsx-runtime/jsx-runtime");

var renderToString = require('preact-render-to-string');

function MyComponent() {
  return (0, _jsxRuntime.jsx)("div", {
    children: "Hello World!"
  }, "foo");
}

module.exports = renderToString((0, _jsxRuntime.jsx)(MyComponent, {}));