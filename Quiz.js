
//  Here the game starts now

// First we nedd to create pop up 
//  for creating a pop up we need the button first
const quizQuestions = [
    {
        topic: "Indian Festivals",
        questions: [
            {
                question: "During which Hindu month is Diwali usually celebrated?",
                options: {
                    A: "Kartika",
                    B: "Chaitra",
                    C: "Ashadha",
                    D: "Magha",
                },
                correct: "Kartika",
            },
            {
                question:
                    "In which state is the Hornbill Festival, a celebration of Nagaland's indigenous tribes, held?",
                options: {
                    A: "Assam",
                    B: "Manipur",
                    C: "Arunachal Pradesh",
                    D: "Nagaland",
                },
                correct: "Nagaland",
            },
        ],
    },
    {
        topic: "Indian History",
        questions: [
            {
                question:
                    "Who was the first Emperor of the Maurya Dynasty in ancient India?",
                options: {
                    A: "Chandragupta Maurya",
                    B: "Ashoka the Great",
                    C: "Bindusara",
                    D: "Chanakya",
                },
                correct: "Chandragupta Maurya",
            },
            {
                question: "The famous 'Battle of Plassey' took place in which year?",
                options: {
                    A: "1757",
                    B: "1764",
                    C: "1772",
                    D: "1780",
                },
                correct: "1757",
            },
        ],
    },
    {
        topic: "Indian Geography",
        questions: [
            {
                question:
                    "Which river is known as the 'Sorrow of Bengal' due to its devastating floods?",
                options: {
                    A: "Yamuna",
                    B: "Ganges",
                    C: "Brahmaputra",
                    D: "Godavari",
                },
                correct: "Brahmaputra",
            },
            {
                question: "In which state is the Western Ghats mountain range located?",
                options: {
                    A: "Kerala",
                    B: "Maharashtra",
                    C: "Gujarat",
                    D: "Odisha",
                },
                correct: "Maharashtra",
            },
        ],
    },
    {
        topic: "Indian Politics",
        questions: [
            {
                question: "Who was the first woman Prime Minister of India?",
                options: {
                    A: "Sonia Gandhi",
                    B: "Indira Gandhi",
                    C: "Sushma Swaraj",
                    D: "Mayawati",
                },
                correct: "Indira Gandhi",
            },
            {
                question:
                    "Which article of the Indian Constitution deals with the President's rule in states?",
                options: {
                    A: "Article 352",
                    B: "Article 360",
                    C: "Article 356",
                    D: "Article 370",
                },
                correct: "Article 356",
            },
        ],
    },
    {
        topic: "Indian Wildlife",
        questions: [
            {
                question:
                    "In which national park can you find the Bengal Tiger in India?",
                options: {
                    A: "Jim Corbett National Park",
                    B: "Sundarbans National Park",
                    C: "Bandipur National Park",
                    D: "Ranthambhore National Park",
                },
                correct: "Ranthambhore National Park",
            },
            {
                question:
                    "Which state in India is home to the famous Kaziranga National Park, known for one-horned rhinoceros?",
                options: {
                    A: "Assam",
                    B: "Madhya Pradesh",
                    C: "Uttarakhand",
                    D: "Rajasthan",
                },
                correct: "Assam",
            },
        ],
    },
    {
        topic: "Science and Technology",
        questions: [
            {
                question: "What does the acronym DNA stand for?",
                options: {
                    A: "Deoxyribonucleic Acid",
                    B: "Dihydroxy Nitric Acid",
                    C: "Digital Nucleic Alloy",
                    D: "Dynamite Nitrogen Atom",
                },
                correct: "Deoxyribonucleic Acid",
            },
            {
                question: "Who is known as the 'Father of Modern Physics'?",
                options: {
                    A: "Isaac Newton",
                    B: "Albert Einstein",
                    C: "Galileo Galilei",
                    D: "Niels Bohr",
                },
                correct: "Albert Einstein",
            },
        ],
    },
    {
        topic: "Literature and Books",
        questions: [
            {
                question:
                    "Which Shakespeare play begins with the line 'If music be the food of love, play on'?",
                options: {
                    A: "Romeo and Juliet",
                    B: "Twelfth Night",
                    C: "Hamlet",
                    D: "Macbeth",
                },
                correct: "Twelfth Night",
            },
            {
                question: "Who wrote the novel 'To Kill a Mockingbird'?",
                options: {
                    A: "Harper Lee",
                    B: "J.K. Rowling",
                    C: "Ernest Hemingway",
                    D: "George Orwell",
                },
                correct: "Harper Lee",
            },
        ],
    },
    {
        topic: "Space and Astronomy",
        questions: [
            {
                question: "What is the largest planet in our solar system?",
                options: {
                    A: "Mars",
                    B: "Jupiter",
                    C: "Saturn",
                    D: "Earth",
                },
                correct: "Jupiter",
            },
            {
                question:
                    "Which famous comet is visible from Earth approximately every 76 years?",
                options: {
                    A: "Halley's Comet",
                    B: "Hale-Bopp",
                    C: "Comet ISON",
                    D: "Comet Lovejoy",
                },
                correct: "Halley's Comet",
            },
        ],
    },
    {
        topic: "Indian Cuisine",
        questions: [
            {
                question:
                    "Which Indian state is famous for its 'Dhokla' and 'Thepla' dishes?",
                options: {
                    A: "Gujarat",
                    B: "Maharashtra",
                    C: "Punjab",
                    D: "Kerala",
                },
                correct: "Gujarat",
            },
            {
                question:
                    "What is the main ingredient of the South Indian dish 'Sambhar'?",
                options: {
                    A: "Tomato",
                    B: "Tamarind",
                    C: "Coconut",
                    D: "Onion",
                },
                correct: "Tamarind",
            },
        ],
    },
    {
        topic: "Indian Mythology",
        questions: [
            {
                question: "Who is considered the 'God of Cricket' in Indian mythology?",
                options: {
                    A: "Sachin Tendulkar",
                    B: "Virat Kohli",
                    C: "Rahul Dravid",
                    D: "Virender Sehwag",
                },
                correct: "Sachin Tendulkar",
            },
            {
                question:
                    "In Hindu mythology, who is the goddess of wealth and prosperity?",
                options: {
                    A: "Lakshmi",
                    B: "Saraswati",
                    C: "Durga",
                    D: "Kali",
                },
                correct: "Lakshmi",
            },
        ],
    },
    {
        topic: "Indian Cinema",
        questions: [
            {
                question:
                    "Which Indian film won the Academy Award for Best Foreign Language Film in 1993?",
                options: {
                    A: "Lagaan",
                    B: "Mother India",
                    C: "Salaam Bombay!",
                    D: "Gandhi",
                },
                correct: "Salaam Bombay!",
            },
            {
                question: "Who is often referred to as the 'Bollywood Badshah'?",
                options: {
                    A: "Amitabh Bachchan",
                    B: "Shah Rukh Khan",
                    C: "Aamir Khan",
                    D: "Salman Khan",
                },
                correct: "Shah Rukh Khan",
            },
        ],
    },
    {
        topic: "Indian Architecture",
        questions: [
            {
                question:
                    "Which iconic monument in India was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal?",
                options: {
                    A: "Qutub Minar",
                    B: "Fatehpur Sikri",
                    C: "Taj Mahal",
                    D: "Charminar",
                },
                correct: "Taj Mahal",
            },
            {
                question:
                    "In which city is the ancient stepwell 'Rani ki Vav' located?",
                options: {
                    A: "Jaipur",
                    B: "Ahmedabad",
                    C: "Udaipur",
                    D: "Jodhpur",
                },
                correct: "Ahmedabad",
            },
        ],
    },
    {
        topic: "Indian Independence Movement",
        questions: [
            {
                question:
                    "Who was the first woman president of the Indian National Congress?",
                options: {
                    A: "Annie Besant",
                    B: "Sarojini Naidu",
                    C: "Vijaya Lakshmi Pandit",
                    D: "Sucheta Kripalani",
                },
                correct: "Annie Besant",
            },
            {
                question:
                    "In which year did India gain independence from British rule?",
                options: {
                    A: "1942",
                    B: "1947",
                    C: "1950",
                    D: "1962",
                },
                correct: "1947",
            },
        ],
    },
    {
        topic: "Art and Culture",
        questions: [
            {
                question: "Who painted the Mona Lisa?",
                options: {
                    A: "Vincent van Gogh",
                    B: "Pablo Picasso",
                    C: "Leonardo da Vinci",
                    D: "Claude Monet",
                },
                correct: "Leonardo da Vinci",
            },
            {
                question:
                    "Which ancient civilization is known for its hieroglyphic writing system?",
                options: {
                    A: "Greek",
                    B: "Roman",
                    C: "Egyptian",
                    D: "Mesopotamian",
                },
                correct: "Egyptian",
            },
        ],
    },
    {
        topic: "Economics and Finance",
        questions: [
            {
                question: "What is the main currency of Japan?",
                options: {
                    A: "Won",
                    B: "Yuan",
                    C: "Yen",
                    D: "Ringgit",
                },
                correct: "Yen",
            },
            {
                question: "Who is often referred to as the 'Father of Economics'?",
                options: {
                    A: "Adam Smith",
                    B: "John Maynard Keynes",
                    C: "Karl Marx",
                    D: "Milton Friedman",
                },
                correct: "Adam Smith",
            },
        ],
    },
];

const selectedTopic={};
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

    let questionAll={};
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
            // Here We can add the values in the object but we can't delete 
            // which we don't want
            if(button.className=="btn1"){
                delete selectedTopic[button.id];
            }
            // so finally we are able to delete the object 
            //  Now we have the object which we wanted
            if(Object.keys(selectedTopic).length >=5){
                // we have to blink the Quiz button 
                let QuizButton=document.querySelector(".start_quiz");
                QuizButton.classList.remove("cursor");
            }
            // Now we have the object having the values of which are selected
            /// Now we have to blink the start quiz butto
            // Here we have added JS to the Start Quiz Button 
        });
    });

    // We have added the new Page Using HTML 
    /// Now need to make list of questions before we need to page HTML and CSS
    // ==================>
    //  Quiz Area Section
    //   STEP 1 : we have to create a object of quetions
    //    let startQuiz1=document.querySelector(".start_quiz");
    //    startQuiz1.addEventListener("click",function(){
    //     let div1=document.createElement("div");
    //     div1.classList.add(".fullScreen");
    //     let hero=document.querySelector(".hero");
    //     console.log(hero);
    //     hero.append(div1);
    //      console.log("We are again back in the system");
    //    })
    let selectedQuestions=[];
     function startQuiz(e){
        // here we first need 
        let realMain=document.querySelector(".real-main");
        realMain.classList.add("display-off");
        let maindiv=document.querySelector("#startingQuiz");
        maindiv.classList.toggle("display-off");

        
    //  here we have reached where we are directing to the next page sucessfully 
        //  now we need to add the question to the elements
        // quizQuestions
        // topic: "Indian Festivals",
        // questions: [
        //     {
        //         question: "During which Hindu month is Diwali usually celebrated?",
        //         options: {
        //             A: "Kartika",
        //             B: "Chaitra",
        //             C: "Ashadha",
        //             D: "Magha",
        //         },
        //         correct: "Kartika",
        //     },
        
        quizQuestions.forEach(topic=>{
        
            for(keys in selectedTopic){
               
                if((topic.topic==selectedTopic[keys])){
                    console.log("Matched" + topic.topic);
                    selectedQuestions.push(...topic.questions);
                }
            }
        })
        printingData();
     }
     let idx=0;
     function printingData(){
        // here we have the selected questions 
        // Here we need to call the elements  
    // {question: 'During which Hindu month is Diwali usually celebrated?', options: {…}, correct: 'Kartika'}
    // 1
    // : 
    // {question: "In which state is the Hornbill Festival, a celebration of Nagaland's indigenous tribes, held?", options: {…}, correct: 'Nagaland'}
    // length
        // Here we have data in this format
        questionSection=document.querySelector(".question_section >p");
        questionSection.innerHTML=selectedQuestions[idx].question;
        //// now we will call all the options 
        let optionA=document.querySelector("#optionA");
        optionA.innerHTML=selectedQuestions[idx].options.A;
        let optionB=document.querySelector("#optionB");
        optionB.innerHTML=selectedQuestions[idx].options.B;
        let optionC=document.querySelector("#optionC");
        optionC.innerHTML=selectedQuestions[idx].options.C;
        let optionD=document.querySelector("#optionD");
        optionD.innerHTML=selectedQuestions[idx].options.D;
        /// now here we will get what button is pressed
        // we will add event listner with button
        
        let insertOption=document.querySelector(".answer_section");
            insertOption.addEventListener("click",function(e){
                // here we will try to add event listner
                //  we are now inside the event listner 
                // console.log(e.target);
                // Since here we can add which button we have clicked
                let ans=e.target.textContent;
                if(ans===selectedQuestions[idx].correct){
                    console.log("Matched");
                    /// here we can access the data and also selected wheather it is right or not
                    
                }
            })
    }
