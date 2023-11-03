/**
 * 
 * @param {string} s 
 * @returns {Number}
 */
function lengthOfLastWord(s) {
    return s ? s.split(' ').reverse()[0].length : 0;
}

console.log(lengthOfLastWord('Hello World'));
