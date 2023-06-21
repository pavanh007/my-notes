
//Todo this is all about async/await
/*
// * Async/await syntax to work with promises
// * once the async function runs, it return promises
*/
async function f() {
  return 1;
}
f().then((data) => console.log(data));

function fResolve() {
  return Promise.resolve(1);
}
fResolve().then((data) => console.log(data));

async function f1() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 1000);
  });
  let result = await promise;
  console.log(result);
}

/*
// * await sometime causes unintentional exit of program execution
// * to handle that scenerio we need to add try/catch
// ! if we forget add the catch statement, we'll get unhandledrejection error
*/

async function func() {
  try {
    await fetch("");
  } catch (error) {
    throw new Error(response.status);
  }
}

async function loadJson(url) {
  let data = await fetch(url);
  if (data.status == 200) {
    let json = await response.json();
    return json;
  }
   console.error(data.status);
}

loadJson("https://javascript.info/no-such-user.json");
