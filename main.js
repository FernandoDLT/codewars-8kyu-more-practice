// Create a funtion that takes in and adds 3 numbers when divided by 3, returns the average.
// If average returned:
// between 90 - 100 = A
// between 80 - 90 = B
// between 70 - 80 = c
// between 60 - 70 = D
// below 60  = F



// function getGrade (s1, s2, s3) {
//     var score = (s1 + s2 + s3) / 3;
//     if (score >= 90 && score <= 100) {
//         return 'A';
//     } else if (score >= 80 && score < 90) {
//       return 'B';
//     } else if (score >= 70&& score < 80) {
//       return 'C';
//     } else if (score >= 60  && score < 70) {
//       return 'D';
//     } else {
//       return 'F';
//     }
//   }
//   console.log(getGrade(5,40,93));
//   console.log(getGrade(30,85,96));
//   console.log(getGrade(92,70,40));
//   console.log(getGrade(5,34,93));

// function getGrade (s1, s2, s3) {
//   var score = (s1 + s2 + s3 ) / 3
//   if(score >= 90 && score <= 100) {
//     return 'A'
//   } else if(score >= 80 && score < 90) {
//     return 'B'
//   }else if (score >= 70 && score < 80) {
//   return 'C'
//   }else if(score >= 60 && score < 70) {
//     return 'D'
//   }else {
//     return 'F'
//   }
// }
//   console.log(getGrade(5,40,93));
//   console.log(getGrade(30,85,96));
//   console.log(getGrade(92,70,40));
//   console.log(getGrade(5,34,93));

function getGrade (s1, s2, s3) {
  var score = (s1 + s2 + s3) / 3
  if(score >= 90 && score <= 100) {
    return 'A - You are a genius!'
  }else if(score >= 80 && score <= 90) {
    return 'B - Not bad at all!'
  }else if (score >= 70 && score <= 80) {
    return 'C - Could do a litte better'
  }else if (score >= 60 && score <= 70) {
    return 'D - This is not good'
  }else {
    return 'F - We need to talk'
  }
}
  console.log(getGrade(95,80,93));
  console.log(getGrade(92,70,40));
  console.log(getGrade(90,98,96));
  console.log(getGrade(5,34,93));
  console.log(getGrade(75,64,93));
  