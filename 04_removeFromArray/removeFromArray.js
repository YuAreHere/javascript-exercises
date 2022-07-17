const removeFromArray = function(array, num1) {
    const args = Array.from(arguments).slice(1);
        //if (args.length == array.length) {
          //  throw Error ("Can't remove all elements");
        //}
        let filteredArray = array.filter((elem) => {
            return !args.includes(elem)
        })
        return filteredArray;
    //let index = array.indexOf(num1);
    //let removeSingleValue = array.splice(index, 1);
      // return removeSingleValue;

};

// Do not edit below this line
module.exports = removeFromArray;
