// Make + populate time at top of page
var DateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDayEl= document.querySelector("#currentDay");
currentDayEl.textContent=DateTime;

var saveBtnEl= document.querySelectorAll(".saveBtn")

var textContentEl= document.querySelectorAll(".description");


// Save input for each textarea
var saveContent= function(){
    for (let index = 0; index < textContentEl.length; index++) {
        const text = textContentEl[index];
        console.log(text.value);
        localStorage.setItem("task"+index,text.value);
        
    }
}
// Put above saved input into local storage
for (let index = 0; index < saveBtnEl.length; index++) {
    const element = saveBtnEl[index];
    element.addEventListener("click", saveContent);
    
}
// load local storage on refresh, and populate in textarea
var loadTasks = function() {
    for (let index = 0; index < textContentEl.length; index++) {
        const text = localStorage.getItem("task"+index);
        textContentEl[index].value=text;
    }
};
// check on current time vs task time, change color of background based on time
var colorCheck = function(){
    var currentTime= moment().hours();
    for (let index = 0; index < textContentEl.length; index++) {
        const color = textContentEl[index];
        if (currentTime < color.id){
            color.setAttribute("class", "bg-success description col-10")
            
        }
        else if (currentTime > color.id){
            color.setAttribute("class", "bg-secondary description col-10")
            
        }
        else if (currentTime = color.id){
            color.setAttribute("class", "bg-danger description col-10")
            
        }

    }
}

loadTasks();
colorCheck();
