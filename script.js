//your code here
let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Who', 'Queen', 'The Rolling Stones', 'Aerosmith'];

// define an array of articles that we want to exclude while sorting
const articles = ['a', 'an', 'the'];

// custom sorting function to compare two strings without articles
function compareStrings(str1, str2) {
  // split the strings into words and remove articles from them
  const words1 = str1.split(' ').filter(word => !articles.includes(word.toLowerCase()));
  const words2 = str2.split(' ').filter(word => !articles.includes(word.toLowerCase()));

  // compare the first non-article words of the two strings
  const result = words1[0].localeCompare(words2[0]);

  // if the first words are the same, compare the second words and so on
  return result === 0 ? words1[1]?.localeCompare(words2[1]) ?? 0 : result;
}

// sort the band names using the custom compare function
bandNames.sort(compareStrings);

// get the ul element with id 'band'
const bandList = document.getElementById('band');

// iterate over the sorted band names and add them to the ul element as li elements
for (let i = 0; i < bandNames.length; i++) {
  const li = document.createElement('li');
  li.textContent = bandNames[i];
  bandList.appendChild(li);
}

