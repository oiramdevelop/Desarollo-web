let orders = [
    {
        orderNum: 1,
        total: 100,
        customer: {
            name: "Oscar Blancarte"
        }
    },{
        orderNum: 2,
        total: 200,
        customer: {
            name: "Carlos Raygoza"
        }
    },{
        orderNum: 3,
        total: 300,
        customer: {
            name: "Andres Bedoya"
        }
    }
]

let simpleOrders = orders.map(order => {return {orderNum: order.orderNum, total: order.total, customerName: order.customer.name}})

console.log("orders => ",       orders)
console.log("simpleOrders => ", simpleOrders)