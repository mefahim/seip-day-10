var grade = "Null";
var point="Null";
function markC(totalMark){
    if(totalMark >= 80 && totalMark <= 100){
        grade = "A+";
        point = "5.00";
    }
    else if(totalMark >= 70 && totalMark <= 79){
        grade = "A";
        point = "4.00";
    }
    else if(totalMark >= 60 && totalMark <= 69){
        grade = "A-";
        point = "3.50";
    }
    else if(totalMark >= 50 && totalMark <= 59){
        grade = "B";
        point = "3.00";
    }
    else if(totalMark >= 40 && totalMark <= 49){
        grade = "C";
        point = "2.00";
    }
    else if(totalMark >= 33 && totalMark <= 39){
        grade = "D";
        point = "1.00";
    }
    else if(totalMark >= 0 && totalMark <= 32){
        grade = "F";
        point = "0.00";
    }
    else{
        alart("Invalid Input")
    }
}
function bangla1() { 
    var tMark = document.getElementById("tMark").value;
    var pMark = document.getElementById("pMark").value;
    totalMark = (parseInt(tMark)+parseInt(pMark));
    markC(totalMark);
    document.getElementById("totalMark").value = totalMark;
    document.getElementById("grade").value = grade;
    document.getElementById("point").value = point;
 }
function bangla2() { 
    var tMark1 = document.getElementById("tMark1").value;
    var pMark1 = document.getElementById("pMark1").value;
    totalMark = (parseInt(tMark1)+parseInt(pMark1));
    markC(totalMark);
    document.getElementById("totalMark1").value = totalMark;
    document.getElementById("grade1").value = grade;
    document.getElementById("point1").value = point;
 }