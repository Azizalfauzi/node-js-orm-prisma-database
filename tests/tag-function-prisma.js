function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("Tag function test", () => {
  const name = "Aziz";
  const lastName = "Alfauzi";
  tagFunction`Hello ${name} , ${lastName}!, How are you?`;
  tagFunction`Bye ${name}, ${lastName}!, see you later`;
});

test("Tag Function SQL", () => {
  const name = "Aziz";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name=${name} AND age=${age}`;
});
