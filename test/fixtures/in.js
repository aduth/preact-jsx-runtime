import renderToString from 'preact-render-to-string';

function MyComponent() {
  return <div key="foo">Hello World!</div>;
}

export default renderToString(<MyComponent />);
