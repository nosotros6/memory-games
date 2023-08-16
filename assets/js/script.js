document.addEventListener("DOMContentLoaded", () => {
  // car options
  const cardArray = [
    {
      name: "cat",
      img: "./assets/img/cat.png",
    },
    {
      name: "cat",
      img: "./assets/img/cat.png",
    },
    {
      name: "dog",
      img: "./assets/img/dog.png",
    },
    {
      name: "dog",
      img: "./assets/img/dog.png",
    },
    {
      name: "pig",
      img: "./assets/img/pig.png",
    },
    {
      name: "pig",
      img: "./assets/img/pig.png",
    },
    {
      name: "rabbit",
      img: "./assets/img/rabbit.png",
    },
    {
      name: "rabbit",
      img: "./assets/img/rabbit.png",
    },
    {
      name: "rooster",
      img: "./assets/img/rooster.png",
    },
    {
      name: "rooster",
      img: "./assets/img/rooster.png",
    },
    {
      name: "sheep",
      img: "./assets/img/sheep.png",
    },
    {
      name: "sheep",
      img: "./assets/img/sheep.png",
    },
    {
      name: "cat2",
      img: "./assets/img/cat2.png",
    },
    {
      name: "cat2",
      img: "./assets/img/cat2.png",
    },
    {
      name: "dogs",
      img: "./assets/img/dogs.png",
    },
    {
      name: "dogs",
      img: "./assets/img/dogs.png",
    },
    {
      name: "pig1",
      img: "./assets/img/pig1.png",
    },
    {
      name: "pig1",
      img: "./assets/img/pig1.png",
    },
    {
      name: "dog1",
      img: "./assets/img/dog1.png",
    },
    {
      name: "dog1",
      img: "./assets/img/dog1.png",
    },
    {
      name: "dog2",
      img: "./assets/img/dog2.png",
    },
    {
      name: "dog2",
      img: "./assets/img/dog2.png",
    },
    {
      name: "dog3",
      img: "./assets/img/dog3.png",
    },
    {
      name: "dog3",
      img: "./assets/img/dog3.png",
    },
    {
      name: "mapache",
      img: "./assets/img/mapache.png",
    },
    {
      name: "mapache",
      img: "./assets/img/mapache.png",
    },
    {
      name: "cuyis",
      img: "./assets/img/cuyis.png",
    },
    {
      name: "cuyis",
      img: "./assets/img/cuyis.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "./assets/img/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Bien!");
      cards[optionOneId].setAttribute("src", "./assets/img/white.jpg");
      cards[optionTwoId].setAttribute("src", "./assets/img/white.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./assets/img/blank.jpg");
      cards[optionTwoId].setAttribute("src", "./assets/img/blank.jpg");
      alert("Intenta de nuevo");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " ¡Ganaste! ¡Felicidades!";
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(() => checkForMatch(), 500);
    }
  }
  createBoard();
});
