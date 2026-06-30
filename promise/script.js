const cart = ["mango", "apple", "orange"]

createOrder(cart)
    .then(function (orderid) {
        console.log(orderid);
        return orderid
    })
    .then(function (orderid) {
        return proceedtopayment(orderid);
    })
    .then(function (paymentstatus) {
        console.log(paymentstatus);
        return showordersummary(paymentstatus);
    })
    .then(function (ordersummary) {
        console.log(ordersummary);
        return updatewallet(ordersummary);
    })
    .then(function (walletstatus) {
        console.log(walletstatus);
    })
    .catch(function (error) {
        console.log(error);
    })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        setTimeout(check, 5000)
        function check() {
            if (!validateorder(cart)) {
                const err = Error("Cart is empty!")
                reject(err);
            }
            else {
                const orderid = 12345;
                resolve(orderid)
            }
        }
    })
    return pr;
}
function validateorder(cart) {
    return cart.length > 0;
}
function proceedtopayment(orderid) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successfull.")
    })
}
function showordersummary(paymentstatus) {
    return new Promise(function (resolve, reject) {
        resolve("Order summary");
    })
}
function updatewallet(ordersummary) {
    return new Promise(function (resolve, reject) {
        resolve("Wallet updated!")
    })
}