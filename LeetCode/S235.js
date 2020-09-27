/**
 * 二叉搜索树两个结点的最近公共祖先结点
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	if (!root) return null
	if (p.val === q.val) return p
	else if (p.val < q.val) {
		if (p.val <= root.val && root.val <= q.val) return root
		else if (q.val < root.val) return lowestCommonAncestor(root.left, p, q)
		else if (p.val > root.val) return lowestCommonAncestor(root.right, p, q)
	} else {
		if (q.val <= root.val && root.val <= p.val) return root
		else if (p.val < root.val) return lowestCommonAncestor(root.left, p, q)
		else if (q.val > root.val) return lowestCommonAncestor(root.right, p, q)
	}
}
