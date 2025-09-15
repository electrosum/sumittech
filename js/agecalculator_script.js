let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");
let outputnmonth = document.getElementById("outputnmonth")
let outputnweeks = document.getElementById("outputnweeks")
let outputndays = document.getElementById("outputndays")
let outputnhours = document.getElementById("outputnhours")
let outputnminutes = document.getElementById("outputnminutes")
let outputnseconds = document.getElementById("outputnseconds")

document.getElementById("calculateBtn").addEventListener("click",(e)=>{
    if(dob.value=="" || currentDate.value==""){
        output.innerHTML = "Please select Date";
    }
    else if(dob.value==currentDate.value || dob.value > currentDate.value)
    {
       output.innerText = "Are You Born?"
    }
    else{
        calculateAgeDifference(dob.value,currentDate.value);


    }
     e.preventDefault()
    
});



function calculateAgeDifference(start,end){
    console.log(start);
    let dobYear = parseInt(start.substring(0,4), 10); //Base 10  
    let dobMonth = parseInt(start.substring(5,7), 10);  
    let dobDate = parseInt(start.substring(8,10), 10); 
    let currYear = parseInt(end.substring(0,4), 10); //Base 10  
    let currMonth = parseInt(end.substring(5,7), 10);  
    let currDate = parseInt(end.substring(8,10), 10); 

    //year difference
    let yearAgeDiff = currYear - dobYear;
    outputnmonth = yearAgeDiff*12-12
    outputnweeks = outputnmonth*4
    outputndays = outputnweeks*7
    outputnhours = outputndays*24
    outputnminutes = outputnhours*60
    outputnseconds = outputnminutes*60

    //month difference.
    let monthAgeDiff;
    if(currMonth >= dobMonth){
        monthAgeDiff = currMonth - dobMonth;
    }
    else{
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    //days difference
    let dateAgeDiff;
    if(currDate>=dobDate){
        dateAgeDiff = currDate - dobDate;
    }
    else{
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth(dobMonth,dobYear);
        dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

        //case when monthAgeDiff goes negative
        if(monthAgeDiff<0){
            monthAgeDiff=11;
            yearAgeDiff--;
        }
    }

    output.innerHTML = yearAgeDiff  + " Years,  " + monthAgeDiff + " Months, " +  dateAgeDiff + " Days, " +   " or "   + outputnmonth +  " Month,"  + " or "  +  outputnweeks + "Weeks, " + " or "  + outputndays + "Days, " + " or "  + outputnhours + "Hours, " + " or "   + outputnminutes + "Mintutes, " + " or "  + outputnseconds + "Seconds, "; 
   
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
  

    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()+1
    var todayDate = String(date.getDate()).padStart(2,'0')
    var datePattern = year + '-' + month + '-' + todayDate
    document.getElementById('currentDate') = datePattern;



