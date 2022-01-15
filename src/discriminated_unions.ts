/**
 * Discriminated Union
 */
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimail(animal: Animal) {
  let speed;

  //access the properties by checking types
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving At: " + speed);
}

moveAnimail({ type: "bird", flyingSpeed: 10 });
