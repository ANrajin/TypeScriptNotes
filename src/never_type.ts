/**
 * never type
 *
 * This type never return anything
 */

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError("An Error Occurred", 500);
