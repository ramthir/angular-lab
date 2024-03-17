function sayHello(name: string) {
  console.log(`Hello ${name}!`)
}

function greet(name: string) {
  const time = new Date().getHours();

  if (time < 12) {
    console.log(`Good Morning ${name}!`);
  } else if (time < 18) {
    console.log(`Good Afternoon ${name}!`);
  } else {
    console.log(`Good Evening ${name}!`);
  }
}

function getAge(dateOfBirth: Date) {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  return age;
}

greet("Amirthan");
sayHello("Akila");


console.log(getAge(new Date(2011, 8, 10)));
