function processOrder() {
    return new Promise((resolve, reject) => {
        console.log("Processing Order...");

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({
                    orderid: 42017,
                    customer: "Hamim",
                    item: "Burger",
                    quantity: 5,
                    total: 10000
                });
            } else {
                reject("Failed to process the order");
            }
        }, 3000);
    });
}

processOrder()
    .then((order) => {
        console.log("Order processed successfully!");
        console.log("Order ID:", order.orderid);
        console.log("Customer:", order.customer);
        console.log("Item:", order.item);
        console.log("Quantity:", order.quantity);
        console.log("Total Amount:", order.total);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Order processing completed.");
    });

