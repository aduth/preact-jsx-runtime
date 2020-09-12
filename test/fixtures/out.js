import { jsx as _jsx } from "preact-jsx-runtime/jsx-runtime";
import renderToString from 'preact-render-to-string';

function MyComponent() {
  return _jsx("div", {
    children: "Hello World!"
  }, "foo");
}

export default renderToString(_jsx(MyComponent, {}));