'use strict';

var plotly = require('../.')('alexander.daniel','u1jactdk3m');

plotly.deletePlot('2718', function (err, figure) {
	if (err) console.log(err);
	else console.log(figure);
});
