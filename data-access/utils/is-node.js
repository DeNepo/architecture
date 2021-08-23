// https://github.com/flexdinesh/browser-or-node/blob/545bf1649148fff3006127e0c8fea3d0bf488f1a/src/index.js

export const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;
