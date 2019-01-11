function targetTerdekat(arr) 
{
	var posX = 0, posO = 0, hitungJarak = 0, jarakSementara = arr.length;
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] === "o")
		{
			posO = i;
		}
	}
	for(let j = 0; j < arr.length; j++)
	{
		if(arr[j] === "x")
		{
			posX = j;
			hitungJarak = Math.abs(posX - posO);
			// console.log(hitungJarak);
			if(jarakSementara > hitungJarak)
			{
				jarakSementara = hitungJarak;
				// console.log(jarakSementara)
			}
		}
	}
	
	if(posX === 0)
	{
		jarakSementara = 0;
	}	
	return jarakSementara;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2