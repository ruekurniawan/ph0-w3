function angkaPalindrome(num) 
{
	for(let i = 0; ; i++)
	{
		var result = ""
		num++;
		var strNum = String(num)
		for(let j = strNum.length-1; j >= 0; j--)
		{
			result += strNum[j];
		}
		if(result === strNum)
		{
			return Number(strNum)
		}
	}  
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

/*Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang 
palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, 
harus mencari angka selanjutnya yang palindrome, yaitu 9.*/