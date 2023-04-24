const q11 = document.querySelector('.q1-1');
const q12 = document.querySelector('.q1-2');
const q13 = document.querySelector('.q1-3');
const q14 = document.querySelector('.q1-4');
const q15 = document.querySelector('.q1-5');
const q21 = document.querySelector('.q2-1');
const q22 = document.querySelector('.q2-2');
const q23 = document.querySelector('.q2-3');
const q24 = document.querySelector('.q2-4');
const q25 = document.querySelector('.q2-5');
const q31 = document.querySelector('.q3-1');
const q32 = document.querySelector('.q3-2');
const q33 = document.querySelector('.q3-3');
const q34 = document.querySelector('.q3-4');
const q35 = document.querySelector('.q3-5');
const submit = document.querySelector('.ratingSubmitButton');
const wrapperElement = document.querySelector('.wrapper');
<<<<<<< Updated upstream
let numOfSelectedElements = -1;
=======
let numOfSelectedElements=0;
let ratings = [];
>>>>>>> Stashed changes

const questions = [q11, q12, q13, q14, q15, q21, q22, q23, q24, q25, q31, q32, q33, q34, q35];
const ratings = [];

wrapperElement.addEventListener('click', function (e) {
    //setting the color of the clicked element to the selected color  
    if (e.target.className !== "wrapper") {
        if ((e.target.className !== "route-condition") && (e.target.className !== "route-traffic") && (e.target.className !== "eaze-of-navigation") && (e.target.className !== "ratingSubmitButton")) {

            if ((e.target.className === 'q1-1') || (e.target.className === 'q1-2') ||
                (e.target.className === 'q1-3') || (e.target.className === 'q1-4') || (e.target.className === 'q1-5')) {
                q11.setAttribute('id', 'deselected')
                q12.setAttribute('id', 'deselected')
                q13.setAttribute('id', 'deselected')
                q14.setAttribute('id', 'deselected')
                q15.setAttribute('id', 'deselected')
            }

            if ((e.target.className === 'q2-1') || (e.target.className === 'q2-2') ||
                (e.target.className === 'q2-3') || (e.target.className === 'q2-4') || (e.target.className === 'q2-5')) {
                q21.setAttribute('id', 'deselected')
                q22.setAttribute('id', 'deselected')
                q23.setAttribute('id', 'deselected')
                q24.setAttribute('id', 'deselected')
                q25.setAttribute('id', 'deselected')
            }

            if ((e.target.className === 'q3-1') || (e.target.className === 'q3-2') ||
                (e.target.className === 'q3-3') || (e.target.className === 'q3-4') || (e.target.className === 'q3-5')) {
                q31.setAttribute('id', 'deselected')
                q32.setAttribute('id', 'deselected')
                q33.setAttribute('id', 'deselected')
                q34.setAttribute('id', 'deselected')
                q35.setAttribute('id', 'deselected')
            }

            if (e.target.getAttribute('id') !== 'selected') {
                e.target.setAttribute('id', 'selected')
            } else[
                e.target.setAttribute('id', 'deselected')
            ]

        }
    }
},
);

    submit.addEventListener('click', function (e) {

<<<<<<< Updated upstream
        for (let i = 0; i < 15; i++) {
            if (questions[i].getAttribute('id') === 'selected') {
                console.log(questions[i].textContent) //logging the values pulled from the buttons
                numOfSelectedElements++;
                if (questions[i].textContent !== null) {
                    ratings[numOfSelectedElements] = questions[i].textContent;
                    //0 index is route-condition
                    //1 index is route-traffic
                    //2 is eaze of navigation
                }
            }
=======
    for (let i=0; i<15; i++) {
        if (questions[i].getAttribute('id') === 'selected') {
            console.log(questions[i].textContent) //logging the values pulled from the buttons
            ratings.push(questions[i].textContent);
            numOfSelectedElements++;
>>>>>>> Stashed changes
        }

        //in case not all 3 elements are selected
        if (numOfSelectedElements !== 3) {
            const warningMessage = document.createElement("div");
            warningMessage.textContent = 'Please select a rating for all 3 categories!';
            warningMessage.setAttribute('class', 'ratingSubmitButton');
            wrapperElement.appendChild(warningMessage);



<<<<<<< Updated upstream
        } else {
            //link for when all 3 ratings are submitted
            //window.location.href = "thank-you.html";
        }


    })

    //code for fetching and editing JSON file here










    //THOMAS WORK HERE
=======
    } else {
        window.location.href = "thank-you.html";
    }
});


//sample code 
/*
    // myJSON is text received in JSON format.
    // Convert JSON into a JavaScript object:
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;
*/
>>>>>>> Stashed changes

//recieving the JSON data
//var change = JSON.parse(rating-DataTransfer.json); 

//editing a specific element
