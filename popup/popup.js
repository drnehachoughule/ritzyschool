window.onload = () => {
  if (!localStorage.getItem("popupShown")) {
    setTimeout(() => {
      openPopup();
      localStorage.setItem("popupShown", "true");
    }, 3000);
  }
};

function openPopup() {
  const popup = document.getElementById("inquiryPopup");
  const box = document.getElementById("popupBox");

  popup.classList.remove("hidden");
  popup.classList.add("flex");

  setTimeout(() => {
    box.classList.remove("scale-95", "opacity-0");
    box.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closePopup() {
  const popup = document.getElementById("inquiryPopup");
  const box = document.getElementById("popupBox");

  box.classList.remove("scale-100", "opacity-100");
  box.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    popup.classList.remove("flex");
    popup.classList.add("hidden");
  }, 300);
}
