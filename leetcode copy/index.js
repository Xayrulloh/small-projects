const singleNumber = {
    question : [[2, 2, 1], [1, 1, 2, 3, 3], [3, 5, 5, 6, 7, 6, 7], [1, 1, 4], [2, 20, 20, 2, 5], [0, 0, 2, 2, 6], [0, 1, 2, 1, 2], [8, 8, 77, 5, 5], [1, 2, 3, 8, 1, 2, 3], [1, 10, 1, 100, 100]],
    answer : [1, 2, 3, 4, 5, 6, 0, 77, 8, 10]
}

const capitalize  = {
    question : ["capiTalIze tHe titLe", "First leTTeR of EACH Word", "i lOve leetcode", "yes OF course", "come ON", "BE carEfUl", "nO", "wHAt", "eLePhanT", "diyoR"],
    answer : ["Capitalize The Title", "First Letter of Each Word", "i Love Leetcode", "Yes of Course", "Come on", "be Careful", "no", "What", "Elephant", "Diyor"]
}

const duplicate = {
    question : [[1,2,3,1], [1,2,3,4], [1,1,1,3,3,4,3,2,4,2], [1, 2, 3, 4, 5, 5], [7, 8, 9, 1, 0, 10], [10, 1, 0, 11], [3, 5, 6, 2, 3], [3, 33, 333], [2, 221, 1, 2], [10, 100, 0, 1]],
    answer : [true, false, true, true, false, false, true, false, true, false]
}

const reverse = {
    question : [123, -123, 120, 3301, 101, 005, 100, 152, -99, 1534236469],
    answer : [321, -321, 21, 1033, 101, 5, 1, 251, -99, 0]
}

problem.onclick = () => {
    if (problem.value == 0) {
        conditions.innerHTML = null
        examples.innerHTML = null
        check.innerHTML = null
    } else if (problem.value == 1) {
        conditions.innerHTML = `<h1 id="nameOfProblem" class="condition-header">1. Single Number</h1><p id="description" class="condition-description">Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.You must implement a solution with a linear runtime complexity and use only constant extra space.</p>`
        examples.innerHTML = `<ul><li><div class="stdio-header">Example 1:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>nums = [2,2,1]</code></div><div class="stdio-code"><span>Output:</span> <code>1</code></div></div></li><li><div class="stdio-header">Example 2:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>[4,1,2,1,2]</code></div><div class="stdio-code"><span>Output:</span> <code>4</code></div></div></li><li><div class="stdio-header">Example 3:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>[1]</code></div><div class="stdio-code"><span>Output:</span> <code>1</code></div></div></li></ul>`
        check.innerHTML = `<div class="right-side-content"><form><textarea name="" id="textarea" cols="30" rows="10">var singleNumber = function(nums) {};</textarea><div class="btn"><div></div><button id="submit" type="submit">Submit</button></div></form></div><div class="right-side-status"><ul id="ul"></ul></div>`

    submit.onclick = (e) => {
        e.preventDefault()
        let func = new Function('array', `
		${textarea.value}

		return singleNumber(array)
	`)
        let process = 0
        ul.innerHTML = null
        for (let a = 0; a < 10; a++) {
            let ans = func(singleNumber.question[a])
            if (ans == singleNumber.answer[a]) {
                ++process
                ul.innerHTML += `<li>${a + 1}. <span class="status">Success <i class="fas fa-check"></i></span></li>`
            }
            else ul.innerHTML += `${a + 1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>`
            }
        alert(`Your result is ${process ? process + '0' : process}%`)
    }

    }
    else if (problem.value == 2) {
    conditions.innerHTML = `<h1 id="nameOfProblem" class="condition-header">2. Capitalize the Title</h1><p id="description" class="condition-description">You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that: If the length of the word is 1 or 2 letters, change all letters to lowercase. Otherwise, change the first letter to uppercase and the remaining letters to lowercase. Return the capitalized title.</p>`
    examples.innerHTML = `<ul><li><div class="stdio-header">Example 1:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>title = "capiTalIze tHe titLe"</code></div><div class="stdio-code"><span>Output:</span> <code>"Capitalize The Title"</code></div><div class="stdio-code"><span>Explanation:</span> <code>Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.</code></div></div></li><li><div class="stdio-header">Example 2:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>title = "First leTTeR of EACH Word"</code></div><div class="stdio-code"><span>Output:</span> <code>"First Letter of Each Word"</code></div><div class="stdio-code"><span>Explanation:</span> <code>The word "of" has length 2, so it is all lowercase. The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.</code></div></div></li><li><div class="stdio-header">Example 3:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>title = "i lOve leetcode"</code></div><div class="stdio-code"><span>Output:</span> <code>"i Love Leetcode"</code></div><div class="stdio-code"><span>Explanation:</span> <code>The word "i" has length 1, so it is lowercase.The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.</code></div></div></li></ul>`
    check.innerHTML = `<div class="right-side-content"><form><textarea name="" id="textarea" cols="30" rows="10">var capitalizeTitle = function(title) { };</textarea><div class="btn"><div></div><button id="submit" type="submit">Submit</button></div></form></div><div class="right-side-status"><ul id="ul"></ul></div>`

    submit.onclick = (e) => {
        e.preventDefault()
        let func = new Function('array', `
		${textarea.value}

		return capitalizeTitle(array)
	`)
        let process = 0
        ul.innerHTML = null
        for (let a = 0; a < 10; a++) {
            let ans = func(capitalize.question[a])
            if (ans == capitalize.answer[a]) {
                ++process
                ul.innerHTML += `<li>${a + 1}. <span class="status">Success <i class="fas fa-check"></i></span></li>`
            }
            else ul.innerHTML += `${a + 1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>`
            }

        alert(`Your result is ${process ? process + '0' : process}%`)
    }
    
    }
    else if (problem.value == 3) {
    conditions.innerHTML = `<h1 id="nameOfProblem" class="condition-header">3. Contains Duplicate</h1><p id="description" class="condition-description">Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.</p>`
    examples.innerHTML = `<ul><li><div class="stdio-header">Example 1:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>nums = [1,2,3,1]</code></div><div class="stdio-code"><span>Output:</span> <code>"true"</code></div></div></li><li><div class="stdio-header">Example 2:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>nums = [1,2,3,4]</code></div><div class="stdio-code"><span>Output:</span> <code>false</code></div></div></li><li><div class="stdio-header">Example 3:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>nums = [1,1,1,3,3,4,3,2,4,2]</code></div><div class="stdio-code"><span>Output:</span> <code>true</code></div></div></li></ul>`
    check.innerHTML = `<div class="right-side-content"><form><textarea name="" id="textarea" cols="30" rows="10">var containsDuplicate = function(nums) { };</textarea><div class="btn"><div></div><button id="submit" type="submit">Submit</button></div></form></div><div class="right-side-status"><ul id="ul"></ul></div>`

    submit.onclick = (e) => {
        e.preventDefault()
        let func = new Function('array', `
		${textarea.value}

		return containsDuplicate(array)
	`)
        let process = 0
        ul.innerHTML = null
        for (let a = 0; a < 10; a++) {
            let ans = func(duplicate.question[a])
            if (ans === duplicate.answer[a]) {
                ++process
                ul.innerHTML += `<li>${a + 1}. <span class="status">Success <i class="fas fa-check"></i></span></li>`
            }
            else ul.innerHTML += `${a + 1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>`
            }

        alert(`Your result is ${process ? process + '0' : process}%`)
    }

    } else if (problem.value == 4) {
    conditions.innerHTML = `<h1 id="nameOfProblem" class="condition-header">4. Reverse Integer</h1><p id="description" class="condition-description">Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.</p>`
    examples.innerHTML = `<ul><li><div class="stdio-header">Example 1:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>x = 123</code></div><div class="stdio-code"><span>Output:</span> <code>321</code></div></div></li><li><div class="stdio-header">Example 2:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>nums = -123</code></div><div class="stdio-code"><span>Output:</span> <code>-321</code></div></div></li><li><div class="stdio-header">Example 3:</div><div class="stdio-content"><div class="stdio-code"><span>Input:</span> <code>120</code></div><div class="stdio-code"><span>Output:</span> <code>21</code></div></div></li></ul>`
    check.innerHTML = `<div class="right-side-content"><form><textarea name="" id="textarea" cols="30" rows="10">var reverse = function(x) {};</textarea><div class="btn"><div></div><button id="submit" type="submit">Submit</button></div></form></div><div class="right-side-status"><ul id="ul"></ul></div>`

    submit.onclick = (e) => {
        e.preventDefault()
        let func = new Function('array', `
		${textarea.value}

		return reverse(array)
	`)
        let process = 0
        for (let a = 0; a < 10; a++) {
            let ans = func(reverse.question[a])
            if (ans == reverse.answer[a]) {
                ++process
                ul.innerHTML += `<li>${a + 1}. <span class="status">Success <i class="fas fa-check"></i></span></li>`
            }
            else ul.innerHTML += `${a + 1}. <span class="status">Fail <i class="fas fa-times"></i></span></li>`
            }
        
        alert(`Your result is ${process ? process + '0' : process}%`)
    }

    }
}












