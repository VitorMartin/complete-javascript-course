function interviewQuestion(job){
    return function(name){
        return 'Helo, ' + name + ', what does a ' + job + ' do?';
    }    
}

var interviewTeacher  = interviewQuestion('teacher');
var interviewDesigner = interviewQuestion('designer');

console.log(interviewTeacher('John'));
console.log(interviewDesigner('Mary'));

