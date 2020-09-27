/**
 * 按照的85的思路写的
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	if (matrix == null || matrix.length == 0) return 0
	let dp = matrix[0].map(e => parseInt(e))
	let max = findMaxSquare(dp)
	for (let i = 1; i < matrix.length; i++) {
		const line = matrix[i]
		for (let j = 0; j < line.length; j++) {
			if (line[j] === "0") dp[j] = 0
			else dp[j]++
		}
		max = Math.max(max, findMaxSquare(dp))
	}
	return max
}

let findMaxSquare = function (arr) {
	let len = arr.length
	let left = []
	let right = []
	let result
	left[0] = -1
	for (let i = 1; i < len; i++) {
		let j = i - 1
		while (j >= 0 && arr[j] >= arr[i]) {
			j = left[j]
		}
		left[i] = j
	}
	right[len - 1] = len
	for (let i = len - 1; i >= 0; i--) {
		let j = i + 1
		while (j < len && arr[j] >= arr[i]) {
			j = right[j]
		}
		right[i] = j
	}
	let max = 0
	for (let i = 0; i < len; i++) {
		max = Math.max(max, Math.pow(Math.min(arr[i], right[i] - left[i] - 1), 2))
	}
	return max
}

/**
 * 网上看的写法，动态规划
 * @param {number[][]}} matrix
 */
var maximalSquare2 = function (matrix) {
	let maxSideLength = 0 // 相当于纪录保持者
	let dp = new Array(matrix.length) // 构建dp数组
	for (let i = 0; i < matrix.length; i++) {
		dp[i] = new Array(matrix[i].length).fill(0) // dp二维数组，每一项初始化0
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === "1") {
				if (i === 0 || j === 0) {
					// base case
					dp[i][j] = 1 // 第一列和第一行的dp值只能为1
				} else {
					// 递推通式，求出dp[i][j]
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
				}
				maxSideLength = Math.max(maxSideLength, dp[i][j]) //挑战纪录保持者，试图更新
			}
		}
	}
	return maxSideLength * maxSideLength // 边长的平方
}
