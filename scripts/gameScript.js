$(function() {

  $(document).ready(function () {
    console.log("doc is ready");
})
  

$(function () { //CHARLIE info
    $.each(CHARLIE, function (index, data) {  
      $("#CHARLIE").append(
        '<h3 class="card-title">' 
        +
        data.gameName.toUpperCase()
        +
        '</h3><h3 class="card-body">' 
        +
        "Created by: " + data.name
        +
        '</h3><h3 class="card-footer">'
        +
        '<button class="btn btn-primary">'
        +
        '<a href= "' + data.url + '">' + data.name + "'s game. Click here to play!"
        +
        "</a></div></div>"
      );
    });
  });
  
  
  const CHARLIE = [ //Charlie Games
    { //Maggie Little
    name: "Maggie Little",
    gameName: "",
    url: ""
    },  
    { //Hunter McGriff
      name: "Hunter McGriff",
      gameName: "Doge Game",
      url: "https://hunter-mcgriff.github.io/dev-lab-charlie/ "
    },
    { //Alec Moore
      name: "Alec Moore",
      gameName: "Pick A Pill",
      url: "https://alecmo26.github.io/CharlieLab/"
    },
    { //Ethan Criddle
      name: "Ethan Criddle",
      gameName: "Doge Game",
      url: "https://stalewhitebread.github.io/urban-invention/"
    },
    { //Ethan Rinke
      name: "Ethan Rinke",
      gameName: "Game of Chance",
      url: "https://crimsonhog.github.io/probable-octo-carnival/"
    },
    { //Garrett Dodd
      name: "Garrett Dodd",
      gameName: "Doge Game",
      url: "https://garrettdodd.tech/CIS-376/BRAVO_LAB/index.html"
    },
    { //Rishi Doreswamy
      name: "Rishi Doreswamy",
      gameName: "Awesome Doge Game",
      url: "https://rish4863.github.io/doge-game/"
    },
    { //Wes Wallace
      name: "Wes Wallace",
      gameName: "The Doge House",
      url: "https://westyler28.github.io/Charlie/"
    },
    { //Lane Schmidt
      name: "Lane Schmidt",
      gameName: "OG Doge Game",
      url: "https://lane30schmidt.github.io/charlie-doge-game/"
    },
    { //Alex Strickland
      name: "Alex Strickland",
      gameName: "Strickland's Doge Game",
      url: "https://astricklandd.github.io/cis376-charlie-lab-1/"
    },
    { //Kristina Williams
      name: "Kristina Williams",
      gameName: "Wower's Doge Game",
      url: "https://kwilliams31.github.io/charlie-lab-doge/"
    },
    { //Cody Mcdonald
      name: "Cody McDonald",
      gameName: "Doge Game",
      url: "https://nutenjoyer.github.io/"
    },
    { //Meghan Skelton
      name: "Meghan Skelton",
      gameName: "MY Doge Game",
      url: "https://mskel1.github.io/studious-octo-giggle/"
    },
    { //Rachel Thompson
      name: "Rachel Thompson",
      gameName: "Bravo Lab",
      url: "https://panhead63.github.io/bravo/"
    },
  ];


  $(function () { //DELTA info
    $.each(DELTA, function (index, data) {  
      $("#DELTA").append(
        '<h3 class="card-title">' 
        +
        data.gameName.toUpperCase()
        +
        '</h3><h3 class="card-body">' 
        +
        "Created by: " + data.name
        +
        '</h3><h3 class="card-footer">'
        +
        '<button class="btn btn-primary">'
        +
        '<a href="' + data.url + '">' + data.name + "'s game. Click here to play!"
        +
        "</a></div></div>"
      );
    });
  });
  
  
  const DELTA = [
    { //Nicole Reilly
      name: "Nicole Reilly",
      gameName: "Spirit Animal Discovery",
      url: "https://nicolereilly.github.io/delta-lab/"
    },
    { //Emily Tinnon
      name: "Emily Tinnon",
      gameName: "Cool Facts Name Game",
      url: "https://etinnon.github.io/cis376-delta/"
    },
    { //Katheryn Grant
      name: "Katheryn Grant",
      gameName: "What is your name?",
      url: "https://codepen.io/katherynisabell/full/WNzWGNd"
    },
    { //Ethan Hubbard
      name: "Ethan Hubbard",
      gameName: "The Wow Factory",
      url: "https://hubbbabubbba.github.io/Delta-Lab-Name-Wow/"
    },
    { //Elijah Aday
      name: "Elijah Aday",
      gameName: "Cool Name Facts",
      url: "https://eaday22.github.io/delta_Lab/"
    },
    { //Chhavi Chhavi
      name: "Chhavi Chhavi",
      gameName: "Crazyyy Fun Facts",
      url: "https://viii21.github.io/dob-facts/"
    },
    { //Hua Huynh
      name: "Hau Huynh",
      gameName: "Cool Name Facts",
      url: "https://hauhuynh90.github.io/Delta/"
    },
    { //Omonegho Ugheoke
      name: "Omonegho Ugheoke",
      gameName: "Cool Name Facts",
      url: "https://ougheoke.github.io/fluffy-carnival/"
    },
    { //Ashlyn Paruznskui
      name: "Ashlyn Paruznskui",
      gameName: "Fun Name Adventure",
      url: "https://ashmcflash.github.io/delta-lab/"
    },
    { //Kevin Salgado
      name: "Kevin Salgado",
      gameName: "Kevin's Incredible Fun Name Facts that will Blow your Mind",
      url: "https://kbrian5.github.io/curly-disco/"
    },
    { //Tychicus Thomas
      name: "Tychicus Thomas",
      gameName: "Learn Your Spirit Animal",
      url: "https://tythomas21.github.io/delta/"
    },
    { //NEW
      name: "Zachary Newell",
      gameName: "",
      url: ""
    },
    {
      name: "Hardik Gupta",
      gameName: "",
      url: ""
    },
  ];
  
});
    