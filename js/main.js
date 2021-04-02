var load = document.getElementById('loade');
window.addEventListener('load',function(){
  load.style.visibility = 'hidden';
})
// Start the settings Box
var settingsToggle = document.querySelector(".icon1 i");
settingsToggle.onclick = function(){
  this.classList.toggle("fa-spin")
};
var settings = document.getElementById('set');
settings.onclick = function(){
  this.classList.toggle("open");
};

var colorList = document.querySelectorAll('.color_list li');
for( var i=0 ; i<colorList.length; i++){
   colorList[i].addEventListener('click',function(e){
   this.getAttribute('data-color');
   document.documentElement.style.setProperty('--main--color',this.getAttribute('data-color'));
   localStorage.setItem('color_option',this.getAttribute('data-color'));
   document.querySelector('.active').classList.remove('active');
   this.classList.add('active') 
 })
}
var mainColors = localStorage.getItem('color_option');
    if(mainColors !== null){
      document.documentElement.style.setProperty('--main--color',localStorage.getItem('color_option'));
    }
// End the settings Box
// Start the Effect Typing
var typed = new Typed('.animate', {
    strings: ['Designer', 'Developer'],
    typeSpeed:80,
    backSpeed:80,
    loop:true
  });
  // End the Effect Typing
  // Start the Random Pages
  var Pages = document.querySelector('.landing_page');
  var imgsArray = ['01.jpg','02.jpg','03.jpg','04.jpg'];
  setInterval(function(){
    var randNumbre = Math.floor(Math.random() * imgsArray.length);
    Pages.style.backgroundImage = 'url("image/'+ imgsArray[randNumbre] +'")';
  },5000)
  // End the Random Pages
  // Start the Skills bar
  var skills = document.querySelector('.skills');
  window.onscroll = function(){
    var skilsOffsetTop = skills.offsetTop;
    var skilsOffsetHeight = skills.offsetHeight;
    var allSkills = document.querySelectorAll('.progress-bar');
    if( skilsOffsetTop+skilsOffsetHeight){
      for(var i=0;i<allSkills.length;i++){
        allSkills[0].style.width = "70%";
        allSkills[0].style.animation ='photoshop 10s';
        allSkills[1].style.width = "80%";
        allSkills[1].style.animation ='html 10s';
        allSkills[2].style.width = "85%";
        allSkills[2].style.animation ='web_design 10s';
        allSkills[3].style.width = "90%";
        allSkills[3].style.animation ='javascript 10s';
      } 
    }
  }
// End the Skills bar
// Start the navbar effect
  window.addEventListener('scroll',function(){
    var header = document.querySelector('.navbar');
    if(window.pageYOffset > header.offsetTop){
      header.classList.add("nvb");
    }else{
      header.classList.remove("nvb");
    }
  })
  // End the navbar effect
  // Start the porfolio
  var listItems = document.querySelectorAll(".list ul li");
  for(var i=0;i<listItems.length;i++){
    listItems[i].addEventListener("click",function(e){
      document.querySelector('.Active').classList.remove('Active');
      this.classList.add('Active');
    });
  }
  function Filter(x){
      var card = document.querySelectorAll(".son"); 
    if (x == 0) {
        for (var i = 0; i < card .length; i++) {
            if (card [i].classList.contains('all')) {
              card[i].style.display = "block";
            }
        }
    }
    if (x == 1) {
        for (var i = 0; i < card.length; i++) {
          card[i].style.display = "none";
            if (card [i].classList.contains('design')) {
              card [i].style.display = "block";
            }
        }
    }
    if (x == 2) {
      for (var i = 0; i < card.length; i++) {
        card[i].style.display = "none";
          if (card [i].classList.contains('works')) {
            card [i].style.display = "block";
          }
      }
    }
    if (x == 3) {
      for (var i = 0; i < card.length; i++) {
        card[i].style.display = "none";
          if (card [i].classList.contains('seo')) {
            card [i].style.display = "block";
            card [i].style.card-columns == "2"
          }
      }
    }
    if (x == 4) {
      for (var i=0; i<card.length;i++) {
        card[i].style.display = "none";
          if (card [i].classList.contains('wordpress')){
            card [i].style.display = "block";
          }
      }
    }
  }
  // End the portfolio