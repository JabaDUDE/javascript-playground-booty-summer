const darthVader = document.querySelector(".darth-vader");
const darthSidious = document.querySelector(".darth-sidious");
const darthPlagueis = document.querySelector(".darth-plagueis-the-wise");
const darthRaven = document.querySelector(".darth-raven");
const darthBane = document.querySelector(".darth-bane");
const container = document.querySelector("#container");

darthVader.addEventListener("click", function () {
  container.innerHTML = `<h4>Luke, I am your baby momma's daddy</h4>`;
});
darthSidious.addEventListener("click", function () {
  container.innerHTML = `<h4>Have you heard the tale of Darth Plagueis the Wise?</h4>`;
});
darthPlagueis.addEventListener("click", function () {
  container.innerHTML = `<h4>Idk if I was that wise, my apprentice killed me in my sleep.</h4>`;
});
darthRaven.addEventListener("click", function () {
  container.innerHTML = `<h4>I have multiple personality disorder and spent my life very confused.</h4>`;
});
darthBane.addEventListener("click", function () {
  container.innerHTML = `<h4>I was the imposter all along.</h4>`;
});
