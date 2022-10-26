function processOrderList(orderList, orderId, state) {
    // orderList = Array of objects
    // orderId = id field in the object
    // state = string that will be matched in the object

    for(let i = 0; i < orderList.length; i++) {
        if(orderList[i].id === orderId){
            orderList[i].state = state;
            if(orderList[i].state === 'Delivered') orderList.splice(i, 1);
        } 
            
        
    }
    console.log(orderList)
    return orderList;
}

processOrderList([
    {
        id: 1,
        state: 'Delivered'
    },
    {
        id: 2,
        state: 'Received'
    }
], 1, 'Received');