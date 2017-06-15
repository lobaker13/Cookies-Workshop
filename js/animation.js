document.addEventListener("DOMContentLoaded", function(){
document.querySelector("#checkout").addEventListener("click", function() {
  console.log("not hey");
  $("#checkout").animate({
    marginLeft: '200%',
  },3000,function(){
    alert("Your Order Will be Ready Soon!");
    window.location.reload();
    });
  });
});
