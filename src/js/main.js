////////////////////////////////////////////////////////////////
////Mark all as read functionality//////////////////
///////////////////////////////////////////////////////////////

const parentElement = document.querySelector(".notifications");
const notificationsContainer = document.querySelector(
  ".notifications__container"
);

const markAllRead = function () {
  const cardArr = Array.from(
    notificationsContainer.querySelectorAll(".notification__card")
  );
  const counter = parentElement.querySelector(".notifications__count");

  cardArr.forEach((card) => {
    if (!card.classList.contains("unread")) return;
    card.classList.remove("unread");
  });

  counter.textContent = "0";
};

parentElement.addEventListener("click", function (e) {
  const btn = e.target.closest(".notifications__btn");
  if (!btn) return;
  console.log("click");
  markAllRead();
});
