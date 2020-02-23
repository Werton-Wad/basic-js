module.exports = function createDreamTeam(members) {
  let newArr = [];
	for (let i = 0; i < members.length; i++){
			if (typeof(members[i]) === 'object' || typeof(members[i]) === 'boolean' || typeof(members[i]) === 'number') continue;
			//if (typeof(members[i][0]) === 'string') 
			newArr.push(members[i][0]);
	}
	let string = newArr.join('').toUpperCase().split('').sort(function(a, b) {
		return (a > b) ? 1 : -1;
	}).join('');
	return string;
};