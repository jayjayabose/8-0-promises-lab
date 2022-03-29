// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
function logResult(obj) {
  finder(obj.first, obj.last)
    .then(result => {
      console.log(result);
    })
    .catch(error => { 
      console.log(error);
    });
}

//logResult({ first: "Rhea", last: "Callahan"} )
//logResult({ first: "Tyler", last: "Yates"} );
//logResult({ first: "Yvette", last: "Glenn"} )
/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */
function logTwoResults(obj1, obj2) {
  [... arguments].forEach(arg => {
    logResult(arg);
  });
}

//logTwoResults({ first: "Tyler", last: "Yates" },   { first: "Yvette", last: "Glenn" } );

/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
function logThreeResultsCities(obj1, obj2, obj3) {
  //loop through args
  [... arguments].forEach(arg => {
    finder(arg.first, arg.last)
    .then(result => {
      console.log(result[0].city);
    })
    .catch(error =>{
      console.log(error);
    });
  })    
}

/**
logThreeResultsCities(
  { first: "Joyce", last: "Wilkins" }, // Kohatk
  { first: "Marshall", last: "Short" }, // Soham
  { first: "Janet", last: "Evans" } // Lafferty
);
 */

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
