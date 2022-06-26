// Part 1 - Create data for the sighting data table:
// Create variables for the table data and tbody
var sightingData = data;
var tbody = d3.select("tbody"); // This is the HTML table item

// Append rows and cell per sighting report value (Date, City, State, Country, Shape, Duration and Comments)
data.forEach(function (sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function ([key, value]) {
        // Append a cell to the row for each value in the sighting data object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Part 2 - Creating the Date Filter function
// Storing the date input value and creating variable for button
var form = d3.select("#form");
var button = d3.select("#filter-btn");

// Create event handlers for clicking the "Filter Table" button or pressing the enter key
form.on("submit", runEnter);
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var datetime_input = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = datetime_input.property("value");
    // Print the value to the console
    console.log(inputValue);
    console.log(sightingData);

    // Cannot get the filter to work... getting and empty list back
    var filteredData = sightingData.filter(sightingData => sightingData.datetime === inputValue);
    console.log(filteredData)

    // Clear out all data in the tbody table - remove data from the table
    tbody.html("");

    // Append rows and cell per sighting report value (Date, City, State, Country, Shape, Duration and Comments)
    filteredData.forEach(function (sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function ([key, value]) {
            // Append a cell to the row for each value in the sighting data object
            var cell = row.append("td");
            cell.text(value);
        });
    });
}