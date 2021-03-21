(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    var score = 0;
    var pressedButton = 0;
    var start = false;

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No', 'I don\'t know', 'Probably not'], 0);

    var q2 = new Question('Which is the capital of Spain?', ['Berlin', 'London', 'Madrid', 'Paris'], 2);

    var q3 = new Question('How much is 9 * 9?', ['18', '81', '90', '0'], 1);

    var questions = [q1, q2, q3];

    function reload(q1, q2, q3) {
       
        return questions = [q1, q2, q3];
        
    }

    var n = Math.floor(Math.random() * questions.length);

    document.querySelector('.ss_btn').addEventListener('click', function (event) {

        if (start) {
            stopGame();
            score = 0;
            document.querySelector('.info').textContent = '';
        } else {
            score = 0;
            start = true;
            document.querySelector('.info').textContent = '';
            reload(q1, q2, q3);
            //console.log(questions);
            nextQuestion(n);
        }
    });

    document.querySelector('.button').addEventListener('click', function (e) {



        switch (e.target) {

            case document.querySelector('.answer_1'):
                pressedButton = 1;
                break;
            case document.querySelector('.answer_2'):
                pressedButton = 2;
                break;
            case document.querySelector('.answer_3'):
                pressedButton = 3;
                break;
            case document.querySelector('.answer_4'):
                pressedButton = 4;
                break;
            default:
                pressedButton = 0;
                break;

        }
        checkAnswer(n, pressedButton);
        if (questions.length > 1) {
            questions.splice(n, 1);
            n = Math.floor(Math.random() * questions.length);
            nextQuestion(n);
        } else {


            var currentInfo = document.querySelector('.info').innerHTML;
            document.querySelector('.info').textContent = currentInfo + '. Congratulations. You answered all questions. To play again press the button below';
            //document.querySelector('.ss_btn').style.display = 'none';
            stopGame();
        }

    });



    function stopGame() {
        score = 0;
        start = false;
        document.querySelector('.answer_1').textContent = '';
        document.querySelector('.answer_2').textContent = '';
        document.querySelector('.answer_3').textContent = '';
        document.querySelector('.answer_4').textContent = '';
        document.querySelector('.question').textContent = 'Welcome to the question game. To start press the start button';
    }



    function nextQuestion(n) {
        this.n = n;
        //pressedButton = 0;

        document.querySelector('.question').textContent = questions[n].question;
        document.querySelector('.answer_1').textContent = questions[n].answers[0];
        document.querySelector('.answer_2').textContent = questions[n].answers[1];
        document.querySelector('.answer_3').textContent = questions[n].answers[2];
        document.querySelector('.answer_4').textContent = questions[n].answers[3];
        //questions[n].displayQuestion();


    }

   

    function checkAnswer(n, pressedButton) {
        this.n = n;
        this.pressedButton = pressedButton;
        if (pressedButton === questions[n].correct + 1) {
            console.log('gore');
            score++;
            //pressedButton = 0;
            document.querySelector('.info').textContent = "Your answer is correct. Your current score is: " + score;
        } else if (pressedButton !== 0) {
            //pressedButton = 0;
            document.querySelector('.info').textContent = "Your answer is incorrect. Your current score is: " + score;
        }
    }

})();
