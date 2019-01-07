function balikString(str) {
	var result = ""
	for(let i = str.length-1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

// function balikString(str) {
// 	var result = "";
// 	var indeks = str.length-1
// 	while(indeks >= 0) {
// 		result += str[indeks]
// 		indeks--;
// 	}
// 	return result;
// }
// console.log(balikString("Hello World!"))