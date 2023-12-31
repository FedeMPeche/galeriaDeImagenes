const galeria = [
    {
      titulo: "Momo",
      descripcion: "El es mi gato 'Momo'",
      imagen: "momo.jpeg",
      categoria: "Momo"
    },
    {
      titulo: "Momo y Nata",
      descripcion: "Momo y la pequeña Natita",
      imagen: "momoynata.jpeg",
      categoria: "MomoYNata"
    },
    {
      titulo: "Roma",
      descripcion: "Ella es mi hermosa perra Roma",
      imagen: "roma.jpeg",
      categoria: "Roma"
    },
  ];

  function crearGaleria() {
    const galleryContainer = document.getElementById("gallery");
    galleryContainer.innerHTML = "";
    
    galeria.forEach((item) => {
      const card = `
        <div class="col-md-4">
          <div class="card mb-4 shadow">
            <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
            <div class="card-body">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      galleryContainer.insertAdjacentHTML("beforeend", card);
    });
  }
  
  
  crearGaleria();

  function filtrarGaleria(categoria) {
    const galleryContainer = document.getElementById("gallery");
    galleryContainer.innerHTML = "";
    
    galeria.forEach((item) => {
      if (categoria === "all" || item.categoria === categoria) {
        const card = `
          <div class="col-md-4">
            <div class="card mb-4 shadow">
              <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
              <div class="card-body">
                <h5 class="card-title">${item.titulo}</h5>
                <p class="card-text">${item.descripcion}</p>
              </div>
            </div>
          </div>
        `;
        galleryContainer.insertAdjacentHTML("beforeend", card);
      }
    });
  }
  
  document.getElementById("btn-all").addEventListener("click", () => filtrarGaleria("all"));
  document.getElementById("btn-momo").addEventListener("click", () => filtrarGaleria("Momo"));
  document.getElementById("btn-momoYNata").addEventListener("click", () => filtrarGaleria("MomoYNata"));
  document.getElementById("btn-roma").addEventListener("click", () => filtrarGaleria("Roma"));

  function ordenarGaleria() {
    galeria.sort((a, b) => a.titulo.localeCompare(b.titulo));
    crearGaleria();
  }
  document.getElementById("btn-order").addEventListener("click", ordenarGaleria);
  
