function rotate(arr, num) {
    let len = arr.length - 1;
    if(arr.length > 10 ** 5) return;

    for (let i = 0; i < num; i++) {
        for (let j = len; j > 0; j--) {
            let swap = arr[j]
            arr[j] = arr[j - 1];
            arr[j - 1] = swap;
        }
    }
    return arr;
}

rotate([, 2, 3, 4], 2);
