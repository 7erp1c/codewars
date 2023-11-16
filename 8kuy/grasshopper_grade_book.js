//Grade book
// Complete the function so that it finds the average of the three scores passed
// to it and returns the letter value associated with that grade.


function getGrade (s1, s2, s3) {
    const sss = ((s1+s2+s3)/3);
    if (sss < 60) {
        return 'F';
    }
    else if (sss < 70){
        return 'D';
    }
    else if (sss < 80){
        return 'C';
    }
    else if (sss < 90){
        return 'B';
    }
    else
        return 'A'; // Code here
}