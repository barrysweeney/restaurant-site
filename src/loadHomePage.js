function loadHomePage() {
  let content = document.getElementById("content");
  let background = document.getElementById("background");

  (function addHeading() {
    let name = "The Restaurant Name";
    let h1 = document.createElement("h1");
    h1.innerHTML = name;
    content.appendChild(h1);
  })();

  (function addImage() {
    let imageSource = "restaurant.jpg";
    background.style.cssText = `background-image: url(${imageSource});`;
  })();

  (function addDescription() {
    let description = "Text about the restaurant";
    let p = document.createElement("p");
    p.innerHTML = description;
    content.appendChild(p);
  })();
}

export default loadHomePage