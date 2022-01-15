/**
 * Type casting
 *
 * <! as type>
 */
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hello";

//or

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "World";
}
