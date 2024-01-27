
//  Here the game starts now

// First we nedd to create pop up 
//  for creating a pop up we need the button first
let selectedTopic={};
let startSolving=document.querySelector(".start_solving");
// Now we have the button 
// we shoud add a event listner
startSolving.addEventListener("click", function(event){
    //  now we are in start button click section
    // now we need that popUp main div
    let popUp=document.querySelector(".popUp_main");
    popUp.classList.remove("pop_off");
});
// Here we have introduce pop Up menu now we need need to clear it also 
// So we need 
let close=document.querySelector(".material-symbols-outlined");
close.addEventListener("click", function(){
    // Now we reached inside th close we need tha pop Up div now
    let popUp=document.querySelector(".popUp_main");
    popUp.classList.add("pop_off");
});
// we have created the basic the layout now 
//  now we need to add the work on the buttons now
var buttons = document.querySelectorAll('.btn1');

    // Add click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the text content of the clicked button
            let buttonText = button.textContent;
            button.classList.toggle("adding_btn");
            button.classList.toggle("btn1");
            // button.classList.toggle("material-symbols-outlined")
            // Log the clicked button's text to the console
            if(button.className==="adding_btn"){
                selectedTopic[button.id]=button.id;
                console.log(selectedTopic);
            }
            if(button.className=="btn1"){
                if(selectedTopic[button.id]){
                    selectedTopic.remove(button.id);
                }
            }
        });
    });


//  here we have the buttons now we need find which button is been clicked
