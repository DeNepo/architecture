import { isPlainObject } from './is-plain-object.js';

/**
 * Checks if a value can be serialized to JSON.
 *
 * @param {any} thing - The value to check.
 * @returns {boolean} Whether or not the value is JSON-friendly
 */
export const isJsonData = (thing) => {
  // is it a json-friendly primitive type?
  if (
    typeof thing === 'boolean' ||
    typeof thing === 'number' ||
    typeof thing === 'string' ||
    thing === null
  ) {
    return true;
  }

  // is it an array containing only json-friendly items?
  if (Array.isArray(thing)) {
    return thing.every(isJsonData);
  }

  // is it a plain object containing only json-friendly entries?
  if (isPlainObject(thing)) {
    return Object.values(thing).every(isJsonData);
  }

  // nothing else is json-friendly!
  return false;
};
