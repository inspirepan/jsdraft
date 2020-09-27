function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let result = []
  if (root == null) {
    return result
  }
  let inorderArray = []
  let inorder = function (node) {
    if (node == null) {
      return
    }
    inorder(node.left)
    inorderArray.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  // 遍历检查
  let maxCount = 0,
    currCount = 0,
    prev = inorderArray[0]
  inorderArray.forEach(curr => {
    if (curr == prev) {
      currCount++
    } else {
      if (currCount == maxCount) {
        result.push(prev)
      } else if (currCount > maxCount) {
        maxCount = currCount
        result = [prev]
      }
      prev = curr
      currCount = 1
    }
  })

  // 检查最后一个数
  if (currCount == maxCount) {
    result.push(inorderArray.pop())
  } else if (currCount > maxCount) {
    result = [inorderArray.pop()]
  }
  return result
}
