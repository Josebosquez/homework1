// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//  Given the object below, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};

var food = user.favoriteThings.food

// Once you have grabbed the favorite foods. Deconstruct the food array to grab only the first 2 values.
var [pizza, tacos] = food

