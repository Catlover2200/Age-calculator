const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculator() {

    let today = new Date();
    let dateInput = today.getDate();
    let monthInput = 1 + today.getMonth();
    let yearInput = today.getFullYear();
    let hourInput = today.getHours();
    let minuteInput = today.getMinutes();
    let secondInput = today.getSeconds();

    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const date = document.getElementById('date').value;

    if(date > dateInput){
        dateInput = dateInput + months[monthInput - 1];
        monthInput = monthInput - 1;
    }
    if(month > monthInput){
        monthInput = monthInput + 12;
        yearInput = yearInput - 1;
    }

    const yearTotal = yearInput - year;
    const monthTotal = monthInput - month;
    const dateTotal = dateInput - date;


    document.getElementById('age').innerHTML = 'Your Age is '+yearTotal+' Years, '+monthTotal+' Months, '+dateTotal+' Days, ' +hourInput+' Hours, ' +minuteInput+ ' Minutes, and ' +secondInput+ ' Seconds ';}

