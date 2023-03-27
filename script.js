const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'Rolling Stones', 'Queen', 'Anthrax', 'Black Sabbath'];

		function sortBands(bands) {
			const articles = ['the', 'a', 'an'];
			const sortedBands = bands.sort(function(a, b) {
				const nameA = a.toLowerCase().replace(/^(the|an|a)\s+/, '');
				const nameB = b.toLowerCase().replace(/^(the|an|a)\s+/, '');
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
			return sortedBands;
		}

		const sortedBands = sortBands(bandNames);

		const bandList = document.getElementById("band");
		sortedBands.forEach(function(band) {
			const li = document.createElement("li");
			li.appendChild(document.createTextNode(band));
			bandList.appendChild(li);
		});
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;