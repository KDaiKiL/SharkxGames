window.addEventListener('load', () => {
  const ofertas = document.getElementById("ofertas");

  ofertas.addEventListener("mouseover", function () {
    this.classList.add("btnHeader");
    this.style.cursor = "pointer";
  });

  ofertas.addEventListener("click", function () {

    if (window.location.href != "http://localhost:3000/home") {
      window.location.replace("http://localhost:3000/home")
      console.log("opa amigo")
      
        console.log("to aqui esperando!!!")
        window.scroll({
          top: 800,
          behavior: "smooth",
        })
      

    }

    if (window.location.href == "http://localhost:3000/home") {
      setTimeout(() => {
        console.log("to aqui esperando!!!")
        window.scroll({
          top: 800,
          behavior: "smooth",
        })
      }, 2000);
    }
  });

})

