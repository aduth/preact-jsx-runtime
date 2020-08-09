const renderToString = require('preact-render-to-string');

function MyComponent() {
  return <div key="foo">Hello World!</div>;
}

module.exports = renderToString(<MyComponent />);
