var arr = [0, -1, 2, -3, 1];
function findTriplets(arr) {
    for (let i = 0; i < arr.length -2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
              console,log("triplets are defined as:" + arr[i] + " " + arr[j] + " " + arr[k]);
              find=true;
              }
        }
    }
 }
}
findTriplets(arr);