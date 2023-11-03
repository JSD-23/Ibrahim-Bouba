/**
 * 
 * @param {Array<Number>} prix 
 * @param {Number} prix_size 
 */
function maxProfit(prix, prix_size) {
    let tmp = 0;
    for (let i = 0; i < prix.length - 1; i++) {
            if (prix[i] > prix[i+1] + prix[i+2]) {
                tmp = prix[i];
                // console.log(prix[i], prix[i+1], prix[i+2])
            } else {
                if (prix[i+2] && prix[i+2] > prix[i+1]) {
                    tmp = prix[i+2]
                } else {
                    tmp = prix[i+1]
                }
            }
    }
    console.log('tmp', tmp);
    return tmp ?? 0;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4], 6));
console.log(maxProfit([7, 6, 4, 3, 1], 5));
