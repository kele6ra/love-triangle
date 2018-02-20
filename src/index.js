/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arrLength =   preferences.length;
  var x,y,z,count=0;

  for (x=1;x<=arrLength;x++){
  	if ((preferences[preferences[preferences[x-1]-1]-1]==x) && (preferences[x-1]!=x)) {
  		count++;
  	}
  }
  console.log(count);
return count/3;

};
