// The recipe card
var recipe = {
  title: 'wagu steak',
  serves: 4,
  Ingredients: ['beef', 'salt', 'pepper']
}

// The reading list

var readList = [
  {title: 'lord of the rings', author: 'will smith', alreadyRead: true},
  {title: 'harry potter', author: 'jk rowling', alreadyRead: false},
  {title: 'web dev for dummies', author: 'DT', alreadyRead: false},
]

console.log(readList[0].title + ' by ' + readList[0].author);
console.log(readList[1].title + ' by ' + readList[1].author);
console.log(readList[2].title + ' by ' + readList[2].author);

for (var i = 0; i < readList.length; i++) {
  if (readList[i].alreadyRead === true) {
    console.log('You alread read ' + '"' + readList[i].title + '" ' + 'by ' + readList[i].author );
  } else {
    console.log('You still need to read ' + '"' + readList[i].title + '"' + ' by ' + readList[i].author);
  }
}
// This bottom bit is replaced by the above 'for' loop

// if (readList[1].alreadyRead === true) {
//   console.log('You alread read ' + '"' + readList[1].title + '" ' + 'by ' + readList[1].author );
// } else {
//   console.log('You still need to read ' + '"' + readList[1].title + '"' + ' by ' + readList[1].author);
// }
//
// if (readList[2].alreadyRead === true) {
//   console.log('You alread read ' + '"' + readList[2].title + '" ' + 'by ' + readList[2].author );
// } else {
//   console.log('You still need to read ' + '"' + readList[2].title + '"' + ' by ' + readList[2].author);
// }

// the movies database

var favMov = {
  title: 'titanic',
  duration: '300 mins',
  stars: ['Romeo', 'Juliette']
}
console.log(favMov.title + ' last for ' + favMov.duration +'. ' + 'Stars: '+ favMov.stars + '.');
