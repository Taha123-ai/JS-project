let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("P1 success.");
    }, 2000);
});

let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve("P2 success.");
        reject("P2 fail.");
    }, 1000);
});

let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("P3 success.");
    }, 6000);
});

// Promise.all([p1, p2, p3])      // rejects because p2 fails
// Promise.allSettled([p1, p2, p3]) // returns status of all
// Promise.race([p1, p2, p3])     // first settled promise
Promise.any([p1, p2, p3])         // first successful promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Over");
    });
    // .then()    → runs when Promise is fulfilled(resolved)

    // .catch()   → runs when Promise is rejected

    // .finally() → runs after the Promise is settled
    //         (either fulfilled or rejected)