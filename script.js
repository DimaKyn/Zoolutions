const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const weekSelect = document.getElementById('Month');
const elementToFocus= document.querySelector('#bt');

let saveFile = () => {

    const Name = document.getElementById('txtName');
    const id = document.getElementById('txtId');
    const cardNumber= document.getElementById('txtCard');
    const cvv = document.getElementById('txtCvv');
    const phoneNum = document.getElementById('txtPnum');

    //Get number of tickets
    var s = document.getElementsByName('numTickets')[0];
    var text = s.options[s.selectedIndex].text;

    //This variable stores all the data
    let data = 'Name: ' + Name.value + '\r\n' + 
    'ID: ' +id.value + '\r\n' + 
    'Card Number: ' + cardNumber.value + '\r\n' + 
    'CVV: ' + cvv.value + '\r\n' + 
    'Phone Number: ' + phoneNum.value + '\r\n' + 
    'Number of tickets bought: ' + text;
        
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'DataForm.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click(); 
}

//Updates selected tickets and price
function updateTicketCount() {
    //From Stack Overflow
    var s = document.getElementsByName('numTickets')[0];
    var text = s.options[s.selectedIndex].text;

    //Updates selected tickets and total price
    count.innerText = text;
    total.innerText = text*50;



}

//Resets selected dates if a new one is clicked
function resetAllSelected() {
    const elements = document.querySelectorAll('.Selected');
    elements.forEach(element => {
        element.classList.remove('Selected');
    });
}

//Scrolls to payment after clicking on date
function scrollToPayment() {
    elementToFocus.scrollIntoView();
    elementToFocus.focus();
}

//Hides and shows Payment Div
function openDiv() {
    document.getElementById("hideDiv").style.display = "inherit";
}

//Hides payment div until a date is pressed
document.getElementById('hideDiv').style.display="none";


//Makes only the avaiable date that is selected to turn torquise 
container.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('Date') && !e.target.classList.contains('Full')) {
        resetAllSelected();
        e.target.classList.contains('Selected')  
        e.target.classList.toggle('Selected');
        document.getElementById('hideDiv').addEventListener('click',openDiv());
        scrollToPayment();

    //Assigns a random integer for ticket amount 1-500
    var dateTicks = document.getElementById('dateTickets');
    dateTicks.innerText = Math.floor(Math.random()*500);
    
    } else {
        e.target.classList.toggle('Selected');
    }
    updateTicketCount();
    

    
});









