// 感觉闭包就是封装一个函数啊

/**
 * 闭包sum
 */
function sum(a) {
	return function (b) {
		return a + b
	}
}

let arrowSum = a => b => a + b
console.log(sum(1)(2))
console.log(arrowSum(1)(2))

/**
 * 通过函数筛选
 * 制造一系列 “即用型” 过滤器：
 ** inBetween(a, b) —— 在 a 和 b 之间或与它们相等（包括）。
 ** inArray([...]) —— 包含在给定的数组中。
 * 用法如下所示：
 ** arr.filter(inBetween(3,6)) —— 只挑选范围在 3 到 6 的值。
 ** arr.filter(inArray([1,2,3])) —— 只挑选与 [1,2,3] 中的元素匹配的元素。
 * 例如：
 */
let arr = [1, 2, 3, 4, 5, 6, 7]
function inBetween(a, b) {
	return e => e >= a && e <= b
}
function inArray(arr) {
	// ...your code...
	return e => arr.includes(e)
}
console.log(arr.filter(inBetween(3, 5)))

/**
 * 按字段排序
 * @param fieldName 因为是字符串形式，所以要用计算属性，不能用.属性
 */
function byField(fieldName) {
	return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1)
}
let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" },
]
console.log(users.sort(byField("name")))
console.log(users.sort(byField("age")))
