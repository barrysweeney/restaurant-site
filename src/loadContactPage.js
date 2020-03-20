function loadContactPage() {
    let content = document.getElementById("content");
  
    (function addContactInfo() {
      let description = "Contact details";
      let p = document.createElement("p");
      p.innerHTML = description;
      content.appendChild(p);
    })();
  }

  export default loadContactPage