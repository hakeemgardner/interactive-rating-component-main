const ratings = document.querySelectorAll(".ratings");
const submit = document.querySelector(".submit");
const modal = document.querySelector(".thank-you-modal ");
const score = document.querySelector(".score");
ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    score.innerHTML = rating.innerHTML;
  });
});

submit.addEventListener("click", function () {
  modal.setAttribute("style", "display:block");
});
