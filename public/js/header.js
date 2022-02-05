window.addEventListener('load',() => {
    const ofertas = document.getElementById("ofertas");

    ofertas.addEventListener("mouseover", function () {
        this.classList.add("btnHeader");
        this.style.cursor = "pointer";
      });
    
      ofertas.addEventListener("click", function () {
          
          if (window.location.href != "http://localhost:3000/home") {
              window.location.replace("http://localhost:3000/home");
        }
        
          if(window.location.href == "http://localhost:3000/home") {
            window.scroll({
                top: 800,
                behavior: "smooth",
            })
        }
      });
       
})

