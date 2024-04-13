const cardsArray = [
    {
        name: "hippo",
        icon: `<i class="fa-solid fa-hippo"></i>`
    },
    {
        name: "cat",
        icon: '<i class="fa-solid fa-cat"></i>'
    },
    {
        name: 'fish',
        icon: '<i class="fa-solid fa-fish"></i>'
    },
    {
        name: 'horse',
        icon: '<i class="fa-solid fa-horse"></i>'
    },
    {
        name: 'dove',
        icon: '<i class="fa-solid fa-dove"></i>'
    },
    {
        name: 'paw',
        icon: '<i class="fa-solid fa-paw"></i>'
    },
    {
        name: "hippo",
        icon: `<i class="fa-solid fa-hippo"></i>`
    },
    {
        name: "cat",
        icon: '<i class="fa-solid fa-cat"></i>'
    },
    {
        name: 'fish',
        icon: '<i class="fa-solid fa-fish"></i>'
    },
    {
        name: 'horse',
        icon: '<i class="fa-solid fa-horse"></i>'
    },
    {
        name: 'dove',
        icon: '<i class="fa-solid fa-dove"></i>'
    },
    {
        name: 'paw',
        icon: '<i class="fa-solid fa-paw"></i>'
    }
];

let flippedCard = [];
const gameBoard = document.getElementById('gameBoard');
let matchedPairs = 0;

shuffleCards();
displayCards();


function shuffleCards() {
    for (let i = cardsArray.length - 1; i >= 0; i--) {
        const randIndex = Math.floor(Math.random() * i + 1);
        [cardsArray[i], cardsArray[randIndex]] = [cardsArray[randIndex], cardsArray[i]];
    }
}

function displayCards() {
    cardsArray.forEach((curr, index, array) => {
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click', flipcard);
    })
}

function flipcard() {
    if (flippedCard.length < 2 && this.classList.contains('active')) {
        const cardId = this.getAttribute('id');
        flippedCard.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardsArray[cardId].icon;
        if(flippedCard.length==2)
            setTimeout(checkMatch,1000);
    }
}

function checkMatch(){
    const card1Id = flippedCard[0].getAttribute('id');
    const card2Id = flippedCard[1].getAttribute('id');

    if(cardsArray[card1Id].name==cardsArray[card2Id].name){

        flippedCard[0].style.border = 'none';
        flippedCard[0].style.background = 'transparent';
        flippedCard[0].innerHTML = '';
        flippedCard[0].classList.remove('active');
        flippedCard[1].classList.remove('active');
        flippedCard[1].style.border = 'none';
        flippedCard[1].style.background = 'transparent';
        flippedCard[1].innerHTML = '';
        matchedPairs++;
        checkGameOver();
    }
    else{

        flippedCard[0].innerHTML = '';
        flippedCard[0].classList.add('cardback');
        flippedCard[1].innerHTML = '';
        flippedCard[1].classList.add('cardback');
    }

    flippedCard = [];
}


function checkGameOver(){

    if(matchedPairs==cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild);
        }
        gameBoard.classList.add('won');
        gameBoard.classList.remove('game');
        gameBoard.innerHTML = 'You Won !!';
    }
}