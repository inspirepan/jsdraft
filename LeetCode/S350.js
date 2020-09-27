/**
 * 强行往Java的写法——Map上套的
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let map = new Map()
	nums1.forEach(num => {
		if (map.has(num)) map.set(num, map.get(num) + 1)
		else map.set(num, 1)
	})
	let ans = []
	for (let num of nums2) {
		if (map.size === 0) break
		if (map.has(num)) {
			ans.push(num)
			let count = map.get(num) - 1
			if (count === 0) map.delete(num)
			else map.set(num, count)
		}
	}
	return ans
}

/**
 * 网上看的写法，Object可以这样子用，果然JS还是比较神奇
 */
var intersect2 = function (nums1, nums2) {
	let tmp = {}
	let res = []
	nums1.forEach(e => (tmp[e] ? tmp[e]++ : (tmp[e] = 1)))
	nums2.forEach(e => {
		if (tmp[e]) {
			res.push(e)
			tmp[e]--
		}
	})
	return res
}

// sort list:
let cmp = function (str1, str2) {
	let i = 0
	while (str1[i] && str2[i]) {
		if (str1[i] > str2[i]) return 1
		else if (str1[i] < str2[i]) return -1
		i++
	}

	return 0
}

let list = document.getElementById("test-list").children

list.sort((n1, n2) => {
	return cmp(n1.innerText, n2.innerText)
})

let parent = document.getElementById("test-list")
let prev

for (let node of list) {
	parent.appendChild(node)
}
