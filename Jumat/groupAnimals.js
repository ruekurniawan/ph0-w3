function groupAnimals(animals) {
  animals.sort();
  // console.log(animals);
  var result = [], banding = animals[0][0];
  var resultDalam = [];
  for(let i = 0; i < animals.length; i++) {
  	if(animals[i][0] === banding) {
  		resultDalam.push(animals[i])
  	}
  	else {
  		result.push(resultDalam)
  		resultDalam = []
  		banding = animals[i][0]
  		resultDalam.push(animals[i])
  	}
  	
  	if(i === animals.length-1) {
  		result.push(resultDalam);
  	}
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]