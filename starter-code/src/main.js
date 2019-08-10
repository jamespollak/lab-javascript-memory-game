var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) {
  function render() {
    var html = "";
    memoryGame.cards.forEach(function(pic) {
      html += '<div class="card" data-card-name="' + pic.name + '">';
      html += '  <div class="back" name="' + pic.img + '"></div>';
      html +=
        '  <div class="front" style="background: url(img/' +
        pic.img +
        ') no-repeat"></div>';
      html += "</div>";
    });
    document.querySelector("#memory_board").innerHTML = html;
  }

  function attachClickHandler() {
    $(document).ready(function() {
      $(".card").on("click", function() {
        $(this)
          .children()
          .toggleClass("back front");
        memoryGame.pickedCards.push(this);
        if (memoryGame.pickedCards.length === 2) {
          memoryGame.checkIfPair(...memoryGame.pickedCards);
          document.querySelector("#pairs_clicked").innerText =
            memoryGame.pairsClicked;
          document.querySelector("#pairs_guessed").innerText =
            memoryGame.pairsGuessed;
          if (memoryGame.pairsGuessed === memoryGame.cards.length / 2) {
            memoryGame.isFinished();
            render();
            attachClickHandler();
          }
        }
      });
    });
  }

  render();
  attachClickHandler();

  // Add all the div's to the HTML

  // Bind the click event of each element to a function
});
