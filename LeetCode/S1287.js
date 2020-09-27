/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
	let len = Math.floor(arr.length / 4)
	for (let i = 0; i < arr.length - len; i++) if (arr[i] == arr[i + len]) return arr[i]
	return arr[0]
}
