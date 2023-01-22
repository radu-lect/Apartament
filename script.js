const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
        // sa facut split (constanta functia)
  
  element.innerText = "";
  // la id sa facut split iar noi spunem ca textul va fi "nimic"
  
  // functia in care editam fiecare 
  text.forEach((value, index) => {
// sa cream  inclinatiile in css
    const outer = document.createElement("span");
    
    outer.className = "outer";

    
 //sa cream timpul 
    
    const inner = document.createElement("span");

    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

// cream literele separate cu clasa letter 
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("linkUl");