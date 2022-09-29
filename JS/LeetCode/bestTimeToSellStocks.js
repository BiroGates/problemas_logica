function bestTimeToSellStocks(arr) {
    let len = arr.length;
    let stock = arr[0];
    let sum = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i + 1] > arr[i]) {
            for (let j = i + 1; j < len; j++) {
                if (j == len) {
                    sum += arr[j] - arr[i];
                    i = len;
                } else if (arr[j + 1] < arr[j] || arr[j + 1] === undefined) {
                    sum += arr[j] - arr[i];
                    i = j;
                    break;
                }
            }
        }
    }
    return sum;
}