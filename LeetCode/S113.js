// 路径总和

var pathSum = function (root, sum) {
	let result = []
	let path = []
	let dfs = function (node, sum, currSum) {
		if (node) {
			currSum += node.val
			path.push(node.val)
			if (!node.left && !node.right && currSum === sum) {
				result.push(path.slice())
			} else {
				dfs(node.left, sum, currSum)
				dfs(node.right, sum, currSum)
			}
			currSum -= node.val
			path.pop()
		}
	}
	dfs(root, sum, 0)
	return result
}
