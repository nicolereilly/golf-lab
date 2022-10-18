$(function() {

  $(document).ready(function () {
    console.log("doc is ready");
})
  

$(function () {
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
        '<a href="' + data.url + '">' + data.name + "'s game"
        +
        "</a></div></div>"
      );
    });
  });
  
  
  const CHARLIE = [
    {
      name: "Hunter McGriff",
      gameName: "Doge Game",
      url: "https://hunter-mcgriff.github.io/dev-lab-charlie/ "
    },
    {
      name: "Alec Moore",
      gameName: "Pick A Pill",
      url: "https://alecmo26.github.io/CharlieLab/"
    },
    {
      name: "Ethan Criddle",
      gameName: "Doge Game",
      url: "https://stalewhitebread.github.io/urban-invention/"
    },
    {
      name: "Ethan Rinke",
      gameName: "Game of Chance",
      url: "https://crimsonhog.github.io/probable-octo-carnival/"
    },
    {
      name: "Garrett Dodd",
      gameName: "Doge Game",
      url: "https://garrettdodd.tech/CIS-376/BRAVO_LAB/index.html"
    },
    {
      name: "Rishi Doreswamy",
      gameName: "Awesome Doge Game",
      url: "https://rish4863.github.io/doge-game/"
    },
    { //HERE
      name: "Wes Wallace",
      gameName: "Welcome to the Doge House",
      url: "https://westyler28.github.io/Charlie/"
    },
    {
      name: "Lane Schmidt",
      gameName: "OG Doge Game",
      url: "https://lane30schmidt.github.io/charlie-doge-game/"
    },
    {
      name: "Alex Strickland",
      gameName: "Strickland's Doge Game",
      url: "https://astricklandd.github.io/cis376-charlie-lab-1/"
    },
    {
      name: "Kristina Williams",
      gameName: "Wower's Doge Game",
      url: "https://kwilliams31.github.io/charlie-lab-doge/"
    },
    {
      name: "Cody McDonals",
      gameName: "Doge Game",
      url: "https://nutenjoyer.github.io/"
    },
    {
      name: "Meghan Skelton",
      gameName: "MY Doge Game",
      url: "https://mskel1.github.io/studious-octo-giggle/"
    },
    { //HERE
      name: "Rachel Thompson",
      gameName: "Awesome Doge Game",
      url: ""
    },
  ];


  $(function () {
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
        '<a href="' + data.url + '">' + data.name + "'s game"
        +
        "</a></div></div>"
      );
    });
  });
  
  
  const DELTA = [
    {
      name: "Emily Tinnon",
      gameName: "Cool Facts Name Game",
      url: "https://github.com/etinnon/cis376-deltaie/ "
    },
    {
      name: "Katheryn Grant",
      gameName: "What is your name?",
      url: "https://codepen.io/katherynisabell/full/WNzWGNd"
    },
    {
      name: "Ethan Hubbard",
      gameName: "The Wow Factory",
      url: "https://hubbbabubbba.github.io/Delta-Lab-Name-Wow/"
    },
    {
      name: "Elijah Aday",
      gameName: "Cool Name Facts",
      url: "https://github.com/EAday22/delta_Lab"
    },
    {
      name: "Chhavi Chhavi",
      gameName: "Crazyyy Fun Facts",
      url: "https://viii21.github.io/dob-facts/"
    },
    {
      name: "Hau Huynh",
      gameName: "Cool Name Facts",
      url: "https://hauhuynh90.github.io/Delta/"
    },
    { //HERE
      name: "Omonegho Ugheoke",
      gameName: "Cool Name Facts",
      url: "https://ougheoke.github.io/fluffy-carnival/"
    },
    {
      name: "Ashlyn Paruznskui",
      gameName: "Fun Name Adventure",
      url: "https://ashmcflash.github.io/delta-lab/"
    },
    {
      name: "Kevin Salgado",
      gameName: "Kevin's Incredible Fun Name Facts that will Blow your Mind",
      url: "https://kbrian5.github.io/curly-disco/"
    },
    { //NEW
      name: "Zachary Newell",
      gameName: "Crazyyy Fun Facts",
      url: ""
    },
    {
      name: "Tychicus Thomas",
      gameName: "Crazyyy Fun Facts",
      url: ""
    },
    {
      name: "Hardik Gupta",
      gameName: "Awesome Doge Game",
      url: ""
    },
  ];
  
});
    