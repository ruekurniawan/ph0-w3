function hitungJumlahKata(kalimat) 
{
	var kata = "", hitungkata = 0;
	for(let i = 0; i < kalimat.length; i++)
	{	
		if(kalimat[i] !== " ")
		{
			kata += kalimat[i]
		}
		else if(kata.length > 0)
		{
			hitungkata++
			kata = "" //Bila sudah dihitung katanyanya dikembalikan ke kosong untuk kata selanjutnya
		}
	}
	if(kata.length > 0)
	{
		hitungkata++
	}
	
	return hitungkata;
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5