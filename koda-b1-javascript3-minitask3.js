function john() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('John');
    }, 1500);
  });
}

function ed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ed');
    }, 2000);
  });
}

function jane() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Jane');
    }, 500);
  });
}

// Chaining then catch
john()
  .then((output) => {
    console.log(output);
    return ed(output);
  })
  .then((output) => {
    console.log(output);
    return jane(output);
  })
  .then((output) => {
    console.log(output);
  })
  .catch((err) => console.log(err));

// Asyn/await & try catch
async function main() {
  try {
    const first = await john();
    const second = await ed();
    const third = await jane();

    console.log(first);
    console.log(second);
    console.log(third);
  } catch (error) {
    console.log(error);
  }
}
main();
