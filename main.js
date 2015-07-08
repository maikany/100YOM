// Creates canvas 320 × 200 at 10, 50
var paper_height = 250
var rect_height = 220
var minimum_year = 1965
var maximum_year = 2015
var paper = Raphael(90, 70, 1100, paper_height);
var songs = [ 

	{
		year:1965,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}
	, 

	{
		year:1967,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}
	, 

	{
		year:1968,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}

	, 

	{
		year:1968,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}

	,
 

	{
		year:1975,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}

	, 


	{
		year:1985,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}

	, 


	{
		year:1995,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}
	, 

	{
		year:1999,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}
	, 

	{
		year:2000,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}

	, 


	{
		year:2005,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}

	, 

	{
		year:2015,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}
	, 

	{
		year:2015,
		url:"https://www.youtube.com/watch?v=K7NyxvASaWU",

	}
]

 var line = paper.path( ["M",0,220, "L",1100,220]);
 line.attr("fill", "black")

var x = 42
var m = minimum_year
var y = 240

//draw the whole graph
for(var i=minimum_year; i<=maximum_year; i+=10) {
	var xx = x*8
	var number = count_songs(i)
	var height = height_of_rectangle(number) 
	draw_song(i, height)
	var date = paper.text(xx,y,m)
	m+=10
	x+=10
	date.attr({
		weight: 'bold'
	})
}

//draw the rectangles
function draw_song (year, height) {
	var padding = 8
	var x_offset = 40
	var y_offset = 0

	year = year-minimum_year+x_offset
	var square = paper.rect(year*padding, rect_height-y_offset-height, 40, height)
    square.attr({
    fill: 'black',
    stroke: 'orange'
})
}

 //set the height of the rectangle according to the number of songs
function height_of_rectangle (number) {
	var height = 0
	height = number*30
	if (height > 220) {
		height = 220
		return height
	} else {
	return height
	}
}

//how many songs are there for this range of date.
function count_songs(year) {
	var count = 0
	for (var i= 0; i < songs.length; i++) {
		if (songs[i].year >= year && songs[i].year < year + 10)
			count = count +1
	}
return count
}
