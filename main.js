<<<<<<<<< Temporary merge branch 1
=========
function getGrade (s1, s2, s3) {
    var score = (s1 + s2 + s3) / 3;
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
      return 'B';
    } else if (score >= 70&& score < 80) {
      return 'C';
    } else if (score >= 60  && score < 70) {
      return 'D';
    } else {
      return 'F';
    }
  }
  console.log(getGrade(5,40,93));
  console.log(getGrade(30,85,96));
  console.log(getGrade(92,70,40));
  console.log(getGrade(5,34,93));
>>>>>>>>> Temporary merge branch 2
