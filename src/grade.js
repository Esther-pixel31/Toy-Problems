//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function getStudentGrade(){
    let marks = parseInt(prompt("Enter student marks (0-100):"));
    let grade = "";
    if(marks >= 79){
        grade = "A";
    }else if(marks >= 60 && marks < 79){
        grade = "B";
    }else if(marks >= 49 && marks <= 59){
        grade = "C";
    }else if(marks >= 40 && marks < 49){
        grade = "D";
    }else if (marks < 40){
        grade = "E";
    }
console.log(`Student grade: ${grade}`);
}
getStudentGrade();