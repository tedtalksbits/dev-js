function allLongestStrings(array) {

    function sortByLength(array){
        return array.sort((a, b)=> a.length - b.length);
        
      };
}



/**
* Test Suite 
*/
describe('allLongestStrings()', () => {
    it('returns all longest strings', () => {
        // arrange
        const strings = ["aba", "aa", "ad", "vcd", "aba", "a"];
        
        // act
        const result = allLongestStrings(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["aba", "vcd", "aba"]);
    });
});