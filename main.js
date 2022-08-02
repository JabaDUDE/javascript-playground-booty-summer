const darthVader = document.querySelector(".darth-vader");
const darthSidious = document.querySelector(".darth-sidious");
const darthPlagueis = document.querySelector(".darth-plagueis-the-wise");
const darthRaven = document.querySelector(".darth-raven");
const darthBane = document.querySelector(".darth-bane");
const container = document.querySelector("#container");

darthVader.addEventListener("click", function () {
  container.innerHTML = `<h4>Luke, I am your baby momma's daddy</h4>`;
});
