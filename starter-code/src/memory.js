class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  //Shuffle
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      this.cards[i] = this.cards[j];
    }
  }

  //Check
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (
      card1.getAttribute("data-card-name") ===
      card2.getAttribute("data-card-name")
    ) {
      this.pairsGuessed++;
      $(card1).unbind("click");
      $(card2).unbind("click");
    } else {
      setTimeout(function() {
        $(card1)
          .children()
          .toggleClass("back front");
        $(card2)
          .children()
          .toggleClass("back front");
      }, 1000);
    }
    this.pickedCards = [];
  }

  //Finish
  isFinished() {
    alert(
      "You have the power! Congratulations, you successfully completed the Superhero Memory Game in a grand total of " +
        this.pairsClicked +
        " clicks!"
    );
    if (confirm("Do you want to test your memory again?")) {
      this.shuffleCards();
      this.pairsGuessed = 0;
      this.pairsClicked = 0;
      document.querySelector("#pairs_clicked").innerText =
        memoryGame.pairsClicked;
      document.querySelector("#pairs_guessed").innerText =
        memoryGame.pairsGuessed;
    } else {
      // user clicked on No
    }
  }
}
