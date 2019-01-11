function mengelompokkanAngka(arr) {
	var result = []; 
	var Genap = [];
	var Ganjil = [];
	var kelipatan3 = [];
	for(let i = 0; i < arr.length; i++)	{
		if(arr[i] % 2 === 0 && arr[i] % 3 !== 0)
		{
			Genap.push(arr[i]);
		}
		if(arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
			Ganjil.push(arr[i]);
		}
		if(arr[i] % 3 === 0) {
			kelipatan3.push(arr[i]);
		}
	}
	result.push(Genap);
	result.push(Ganjil);
	result.push(kelipatan3);
	return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// function mengelompokkanAngka(arr) {
// 	var result = [[],[],[]];
// 	// console.log(arr.length)
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
// 			result[0].push(arr[i])
// 		}
// 		if(arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
// 			result[1].push(arr[i])
// 		}
// 		if(arr[i] % 3 === 0) {
// 			result[2].push(arr[i]);
// 		}
// 	}
// 	return result;
// }
