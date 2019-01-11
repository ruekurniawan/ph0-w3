function pasanganTerbesar(num) 
{
	var stringNum = String(num);
	var result = []
	for(let  i = 0; i < stringNum.length-1; i++)
	{
		result.push(stringNum[i] + stringNum [i+1])
	}

	// result.sort();
	// return result[result.length-1];  
	var temp = ""
	for(let j = 1; j < result.length; j++)
	{
		for(let k = 0; k < result.length; k++)
		{
			if(result[j] < result [k])
			{
				temp = result[j];
				result[j] = result [k]
				result[k] = temp
			}
		}
	}

	return Number(result[result.length-1]);
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
/*Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
Contoh, jika angka adalah 183928, maka function akan me-return 92, 
pasangan dua digit angka yang paling besar diantara yang lainnya.*/