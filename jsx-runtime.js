import { createElement } from 'preact';
export { Fragment } from 'preact';

/** @typedef {import('preact').ComponentType} ComponentType */
/** @typedef {import('preact/src/jsx').JSXInternal.HTMLAttributes} HTMLAttributes */
/** @typedef {import('preact/src/jsx').JSXInternal.SVGAttributes} SVGAttributes */
/** @typedef {HTMLAttributes & SVGAttributes & Record<string, any>} Props

/**
 * @param {ComponentType} type     Component type.
 * @param {Props}         config   Component props.
 * @param {string=}       maybeKey Key, or undefined.
 */
export function jsx(type, config, maybeKey) {
  /** @type {Props} */
  var props;

  /** @type {string} */
  var propName;

  if (maybeKey === undefined) {
    props = config;
  } else {
    props = {
      key: '' + maybeKey,
    };

    for (propName in config) {
      if (Object.prototype.hasOwnProperty.call(config, propName)) {
        props[propName] = config[propName];
      }
    }
  }

  return createElement(type, props);
}

export { jsx as jsxs };
