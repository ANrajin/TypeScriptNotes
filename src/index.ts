/**
 * Index Properties
 *
 */
interface ErrorContainer {
  //key:value
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
