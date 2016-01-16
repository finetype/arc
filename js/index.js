$(document).ready(function(){
  $('.main-display').velocity("slideDown", { duration: 1500 });
  $('.nav').velocity({ opacity: '1'}, {delay: 1000 }, {duration: 2000});

  $('.leave').click(function(){
    var exit = document.querySelectorAll('.exit')

    $.Velocity(exit, 'transition.flipYOut', {stagger: 250})
    .then(function(elem){
      window.location = "file:///media/kajo/code/github/arcInvestments/projects.html"
    })
  })
});