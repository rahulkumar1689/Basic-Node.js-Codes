// frequencies insortes array

function frequencyinsoretd(arr){
    let freq = {};
    for (let num of arr){
        freq[num] = (freq[num] || 0)+1;
    }
    return freq;
}
console.log(frequencyinsoretd([1,1,2,2,2,3,3,4]));