// var lastname = localStorage.getItem("leadership");
// var differ = localStorage.getItem("differ");
var difference = JSON.parse(localStorage.getItem("difference"));
// console.log(typeof difference); //object
var data = difference;

var career = localStorage.getItem("car");
var dict ={
  "game development": data[0],
  "graphic design": data[1],
  "data science": data[2],
  "software development": data[3],
  "systems administrator" : data[4],
  "computer architecture" : data[5],
  "AI/Machine Learning" : data[6],
  "cybersecurity": data[7],
  "robotics": data[8],
  "computer research": data[9],}
;

// Create items array
var items = Object.keys(dict).map(function(key) {
  return [key, dict[key]];
});

// Sort the array based on the second element
items.sort(function(first, second) {
  return first[1] - second[1];
});

// Create a new array with only the first 5 items
console.log(items);
// console.log(items[1][1]);
var vals = [0,0,0,0,0,0,0,0,0,0];
for (var i= 0; i < items.length; i++){
  // console.log(i);
  vals[i]= items[i][1];
}


var ret = "<ol>";
ret += "<br>";
for(var i = 0; i < items.length; i++){
  ret += "<li>" + items[i][0] + " : " + vals[i] + "</li>";
  //  ret += " : ";
  // ret += vals[i];
  // ret += "<br>";
  // console.log(items[i][0]);
  // console.log(vals[i]);
  console.log(ret);
}
ret += "</ol>"

document.getElementById("inser").innerHTML = ret;



data= vals;
console.log(data);
var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

// d3.tsv('d3.tsv', function(){

  // x.domain([0, d3.max(data, function(d){ return d.value; })]);

  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) {
        // console.log(i, d);
        return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", x)
      .attr("height", barHeight - 1); //graph appears here

  bar.append("text")
      .attr("x", function(d) { return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });

function type(d){
  d.value = +d.value;
  return d;
};


// console.log(differ);
// // console.log(lastname);
// var chart = d3.bullet()
//     .width(width)
//     .height(height);
//
//
//   var svg = d3.select("body").selectAll("svg")
//       .data(data)
//     .enter().append("svg")
//       .attr("class", "bullet")
//     .append("g")
//       .call(chart);
//
//   var title = svg.append("g")
//       .style("text-anchor", "end")
//       .attr("transform", "translate(-6," + height / 2 + ")");
//
//   title.append("text")
//       .attr("class", "title")
//       .text(function(d) { return d.title; });
//
//   title.append("text")
//       .attr("class", "subtitle")
//       .attr("dy", "1em")
//       .text(function(d) { return d.subtitle; });
//
//   d3.selectAll("button").on("click", function() {
//     svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
//   });
// });
//
// function randomize(d) {
//   if (!d.randomizer) d.randomizer = randomizer(d);
//   d.ranges = d.ranges.map(d.randomizer);
//   d.markers = d.markers.map(d.randomizer);
//   d.measures = d.measures.map(d.randomizer);
//   return d;
// }
//
// function randomizer(d) {
//   var k = d3.max(d.ranges) * .2;
//   return function(d) {
//     return Math.max(0, d + k * (Math.random() - .5));
//   }
