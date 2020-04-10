/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var Question = function(enunciated, answers, feedback){
    this.qText = enunciated;
    this.ans  = answers;
    this.rightAns = feedback;
}

var UI = {
    qs: [],
    q: 0,
    score: 0,
    rand: function () { return Math.floor(Math.random() * this.qs.length) },
    usrAns: -1,
    usrIsRight: undefined,
    continuePlaying: true,

    init:
    function(){
        console.clear();

        this.score = 0;
        console.log('score :', this.score);

        this.usrAns = -1;

        this.usrIsRight = undefined;

        this.continuePlaying = true;

        var q0 = new Question('Enunciated 0?', ['Ans 0.0', 'Ans 0.1', 'Ans 0.2'], 0);
        var q1 = new Question('Enunciated 1?', ['Ans 1.0', 'Ans 1.1', 'Ans 1.2'], 1);
        var q2 = new Question('Enunciated 2?', ['Ans 2.0', 'Ans 2.1', 'Ans 2.2'], 2);
        console.log('q0 :', q0);
        console.log('q1 :', q1);
        console.log('q2 :', q2);

        this.qs = [q0,q1,q2];
        console.log('qs :', this.qs);
    },

    getQ: 
    function(){
        this.q = this.qs[this.rand()]
        console.log('q :', this.q);
    },
    
    showQ: 
    function(){
        console.log('\n');
        console.log(this.q);
        for(var i=0; i<this.q.ans.length; i++){
            console.log(this.q.ans[i]);
        }
    },

    getUsrAns:
    function(){
        var inp;
        do{
            inp = parseInt(window.prompt("Type the number or -1 to exit"));
        }while(!(-1<=inp && inp<this.qs.length));
        console.log('Your answer :', inp);
        
        this.usrAns = inp;
    },

    checkAns:
    function(){
        this.usrIsRight = this.usrAns === this.q.rightAns;
        console.log('usrIsRight :', this.usrIsRight);
        
        this.usrIsRight ? console.log('You are right.') : console.log('You are wrong.');
    },

    run:
    function(){
        do{
            UI.getQ();
            UI.showQ();
            
            UI.getUsrAns();

            if(this.usrAns === -1){
                this.continuePlaying = false;
                break;
            }

            UI.checkAns();
        }while(this.usrIsRight);
    }
}

function main(){
    do{
        UI.init();

        UI.run();
        
        do{ UI.continuePlaying = prompt("Continue playing? [y/n]"); }
        while(['y','n'].indexOf(UI.continuePlaying) === -1);
        
        UI.continuePlaying === 'y' ? UI.continuePlaying = true : UI.continuePlaying = false;
        
        console.log();
    }while(UI.continuePlaying);
}


main();