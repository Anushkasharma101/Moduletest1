document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');
const rulesbtn = document.querySelector('.rulesbtn');
const modalcontainer = document.querySelector('.modalcontainer');
const closebutton = document.querySelector('.closebutton');

function handleRuleMenuClick(){
    modalcontainer.classList.toggle('show-modal');
}
rulesbtn.addEventListener('click',handleRuleMenuClick);
closebutton.addEventListener('click',handleRuleMenuClick);

});

const resultWinner = document.querySelector(".results__winner");
const resultText1 = document.querySelector(".results__text1");
const resultText2 = document.querySelector(".results__text2");
const playAgainBtn = document.querySelector(".play-again");
const scorenumber1 = document.querySelector('.pcscore');
const scorenumber2 = document.querySelector('.yourscore');
let score = 0;

    const CHOICES = [
            {
                name:"paper",
                beats:"rock"
            },
            {
                name:"scissors",
                beats:"paper"
            },
            {
                name:"rock",
                beats:"scissors"
            },
        ]
        
        const choiceButtons = document.querySelectorAll('.choice-btn');
        const gameDiv = document.querySelector('.game');
        const resultsDiv = document.querySelector('.results');
        const resultDivs = document.querySelectorAll('.results__result');
        
        choiceButtons.forEach( (button) => {
            button.addEventListener('click',() => {
                const choiceName = button.dataset.choice;
                const choice = CHOICES.find(choice => choice.name === choiceName );
                choose(choice);
            })
        })
        
        function choose(choice){
            const pcchoice = pcchoice();
            displayResults([choice,pcchoice]);
            displayWinner([choice,pcchoice]);
        }

        function displayWinner(results){
            setTimeout(() => {
                const userWins = isWinner(results)
                const pcWins = isWinner(results)

                if(userWins){
                    resultText1.innerText = "You Win";
                    resultText2.innerText = "Aganist PC"
                    resultDivs[0].classList.toggle('winner')
                    keepScore(1)
                }else if(pcWins){
                    resultText1.innerText = "You Lost";
                    resultText2.innerText = "Aganist PC";
                    resultDivs[1].classList.toggle('winner')
                    keepScore(1)
                }else{
                    resultText1.innerText = "TIE UP";
                    resultText2.innerText = '';
                }
                
                resultWinner.classList.toggle("hidden");
                resultsDiv.classList.toggle("show-winner");
            },1000);
        }
        function isWinner(results){
            return results[0].beats === results[1].name;
        }

        function keepScore(point){
           score += point
           scorenumber1.innerText = score
           scorenumber2.innerText = score
        }
        playAgainBtn.addEventListener('click',() => {
            gameDiv.classList.toggle('hidden')
            resultsDiv.classList.toggle('hidden')

            resultDivs.forEach(resultDiv => {
                resultDiv.innerHTML = ""
                resultDiv.classList.remove('winner');
            })
            resultText2.innerText = "";
            resultWinner.classList.toggle('hidden')
            resultsDiv.classList.toggle('show-winner')
        });
        
        function pcchoice(){
            const rand = Math.floor(Math.random()*CHOICES.length)
            return CHOICES[rand];
        }
        
        function displayResults(results){
            resultDivs.forEach((resultDiv,idx) => {
                setTimeout(() => {
                    resultDiv.innerHTML = `
                      <div class="choice ${results[idx].name}">
                      <img src="images/icon-${results[idx].name}.svg" alt="${results[idx].name}"/>
                      </div>
                      `;
                },idx*1000);
                
            });

           gameDiv.classList.toggle('hidden')
           resultsDiv.classList.toggle('hidden') 
        }
       
        
  
  