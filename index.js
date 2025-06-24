// Write your code here!
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  if (main) {
    main.remove();
  }

  const newHeader = document.createElement("h1");
  newHeader.id = "victory";
  newHeader.textContent = "Josh is the champion";
  document.body.append(newHeader);

  // ✅ Make it globally accessible
  window.newHeader = newHeader;
});
