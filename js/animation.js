document.addEventListener("DOMContentLoaded", function(){
document.querySelector("#checkout").addEventListener("click", function() {
  console.log("not hey");
  $("#checkout").animate({
    marginLeft: '150%',
  },3000,function(){
    window.location.reload();
    });
  });
});
