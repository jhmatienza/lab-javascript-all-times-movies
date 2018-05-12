/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    movie = Object.assign({}, movie);
    var duration = movie.duration.split(" ").reduce(function(acc, time) {
      if (time.indexOf("h") !== -1) {
        return Number(time.replace("h", "")) * 60 + acc;
      } else {
        return Number(time.replace("min", "")) + acc;
      }
    }, 0);
    movie.duration = duration;
    return movie;
  });
}

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
  return array.reduce(function(acc, movie) {
    return acc + parseFloat(movie.rate) / array.length;
  }, 0);
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var drama = array.filter(function(elem) {
    return elem.genre.indexOf("Drama") !== -1;
  });
  return ratesAverage(drama);
}
console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration(movies){  
  return movies.sort(function(item1, item2){
    return item1.duration - item2.duration;
  });
}
console.log(orderByDuration(turnHoursToMinutes(movies)));


// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
  return array.filter(function(elem){
    return elem.director.indexOf('Steven Spielberg') !== -1 && elem.genre.indexOf('Drama') !== -1;
  });
}
console.log(howManyMovies(movies));


// Order by title and print the first 20 titles

function orderAlphabetically(array){
  var moviesArr =  array.map(function(movies) {
     return movies;
   }).sort(function(first, second){
     return first.title > second.title;
   });
   return moviesArr.splice(0, 20);
 }
 console.log(orderAlphabetically(movies));

// Best yearly rate average
