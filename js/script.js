let hour = document.querySelector(".hour");
let minut = document.querySelector(".minut");
let sekund = document.querySelector(".sekund");

function myClock() {
  hour.textContent =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();

  minut.textContent =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();

  sekund.textContent =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
}

setInterval(myClock, 1000);


// const request = new XMLHttpRequest();
