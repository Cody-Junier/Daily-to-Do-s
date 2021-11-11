// Make + populate time at top of page
var DateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDayEl= $("#currentDay");
currentDayEl.text(DateTime)






// Save schedule in local storage
// make elements 
const inputEl = $('.description').text();
const saveEl = $(".saveBtn");
// let textAreas =["$('#text-hour-9')","$('#text-hour-10')","$('#text-hour-11')","$('#text-hour-12')","$('#text-hour-13')","$('#text-hour-14')","$('#text-hour-15')","$('#text-hour-16')","$('#text-hour-17')"]
// console.log(textAreas[1])
// textAreas[1].text()=""
// whenever save is clicked, grab input and save to local storage

for (let index = 9; index < 17; index++) {

    saveEl.on('click', function(){
        console.log("save-clicked");
        let text= $('#text-hour-'+index).val();
        localStorage.setItem("description",text);
        
    });
}
// load local storage on refresh
var loadTasks = function() {
    

   localStorage.getItem("description");
};
loadTasks();


