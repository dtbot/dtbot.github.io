document.querySelector(".button1").onclick=()=>{
  location.href = "https://discord.com/oauth2/authorize?client_id=817958045652615188&permissions=1345842256&scope=bot"
}
document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});
