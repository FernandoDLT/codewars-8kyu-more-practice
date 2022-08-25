// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns 
// the letter value associated with that grade.

function getGrades(s1,s2,s3) {
    var score = (s1 + s2 + s3) / 3;
    if (score >= 90 && score <= 100) {
        return 'A';
    }else if (score >= 80 && score < 90) {
        return 'B';
    }else if (score >= 70 && score < 80) {
        return 'C';
    }else if (score >= 60 && score < 70) {
        return 'D';
    }else {
        return 'Falied, please retest'
    }
}

console.log(getGrades(65,40,93));
console.log(getGrades(98,100,93));
console.log(getGrades(5,40,93));
console.log(getGrades(70,86,93));
console.log(getGrades(85,40,93));

function getGrade(g1,g2,g3) {
    var score = (g1 + g2 + g3) / 3;
    if (score >= 90 && score <= 100) {
        return 'A - You passed with flying colors!';
    }else if (score >= 80 && score < 90) {
        return 'B - Great job!';
    }else if (score >= 70 && score < 80) {
        return 'C - Needs some improvement'; 
    }else if (score >= 60 && score < 70) {
        return 'D - You can do much better'
    }else {
        return 'F - I don\'t know what to say...'
    }
}
console.log(getGrade(98,100,93));
console.log(getGrade(5,40,93));
console.log(getGrade(65,40,93));
console.log(getGrade(70,86,93));
console.log(getGrade(85,40,93));