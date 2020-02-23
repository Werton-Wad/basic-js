module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  let newArr = [];
	for (let i = 0; i < members.length; i++){
			if (typeof(members[i]) === 'object' || typeof(members[i]) === 'boolean' || typeof(members[i]) === 'number' || typeof(members[i]) === 'undefined') continue;
      let withoutSpacesMembers = members[i].trim();
			newArr.push(withoutSpacesMembers[0]);
	}
	let string = newArr.join('').toUpperCase().split('').sort(function(a, b) {
		return (a > b) ? 1 : -1;
	}).join('');
	return string;
};