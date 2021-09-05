import Ajv from './ajv7.bundle.js';

export const validation = (schema, data, log = true) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (log) {
    console.log('------- schema -------\n\n', schema, '\n\n');
    console.log('------- data -------\n\n', data, '\n\n');
  }

  console.log('------- validation -------\n\n');
  if (isValid) {
    console.log('all good!', '\n\n');
  } else {
    console.log(
      '%cvalidation errors:',
      'color: red; font-weight: bold;',
      validate.errors,
    );
    throw new Error(
      `data is not valid: \n\nvalidation errors are logged above ^\n`,
    );
  }
};
