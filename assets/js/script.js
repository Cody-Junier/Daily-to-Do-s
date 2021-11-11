// Make + populate time at top of page
var DateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDayEl= $("#currentDay");
currentDayEl.text(DateTime)






// Save schedule in local storage
// make elements 
const inputEl = $('.description').text();
const saveEl = $(".saveBtn");
// whenever save is clicked, grab input and save to local storage
saveEl.click(function(){
    console.log("save-clicked");
    localStorage.setItem("description",inputEl);
})
// load local storage on refresh
var loadTasks = function() {
   localStorage.getItem(inputEl);
};
loadTasks();


