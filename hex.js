const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
function getColor() {
  let colorHex = "#";
  for (let index = 0; index < 6; index++) {
    let random = Math.floor(Math.random() * hex.length);
    colorHex += hex[random];
  }
  console.log(colorHex);
  return colorHex;
}
btn.addEventListener("click", () => {
  let color = getColor();
  document.body.style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
});
