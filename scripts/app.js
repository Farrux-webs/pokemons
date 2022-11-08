pokemons.forEach((item) => {
  const card = document.createElement('div');
  card.setAttribute("class", "card mb-4");
  card.innerHTML = `
   <img src="${item.img}" width="157" height="157" alt="" class="mx-auto">
             <div class="card-body">
                <strong class="name">${item.name}</strong>
                <p class="type">${item.type}</p>
                <div class="card-properties d-flex">
                    <strong class="weight">${item.weight}</strong>
                    <strong class="age">${item.candy_count ? item.candy_count + 'age' : 'none'}</strong>
                </div>
            </div>
  `;

  $(".cardWrapper").appendChild(card);
});

const types = []
pokemons.forEach((evt)=>{
    evt.type.forEach((type)=>{
      if(!types.includes(type)){
        types.push(type)
        const option = document.createElement('option')
        option.setAttribute('value', `${type}`)
        option.innerHTML = `${type}`
        $("#FilterbyType").appendChild(option);
      }
    })
  })


  function filterByTypes(data = []){
    $("#FilterbyType").addEventListener("change", (e) => {
      $(".cardWrapper").innerHTML = "";
    pokemons.forEach((evt)=>{
        if(evt.type.includes(e.target.value)){
            const card = document.createElement("div");
            card.setAttribute("class", "card mb-4");
            card.innerHTML = `
        <img src="${evt.img}" width="157" height="157" alt="" class="mx-auto">
             <div class="card-body">
                <strong class="name">${evt.name}</strong>
                <p class="type">${evt.type}</p>
                <div class="card-properties d-flex">
                    <strong class="weight">${evt.weight}</strong>
                    <strong class="age">${
                      evt.candy_count ? evt.candy_count + "age" : "none"
                    }</strong>
                </div>
            </div>
  `;

            $(".cardWrapper").appendChild(card);
        }else if (e.target.value === "all") {
                      const card = document.createElement("div");
                      card.setAttribute("class", "card mb-4");
                      card.innerHTML = `
        <img src="${evt.img}" width="157" height="157" alt="" class="mx-auto">
             <div class="card-body">
                <strong class="name">${evt.name}</strong>
                <p class="type">${evt.type}</p>
                <div class="card-properties d-flex">
                    <strong class="weight">${evt.weight}</strong>
                    <strong class="age">${
                      evt.candy_count ? evt.candy_count + "age" : "none"
                    }</strong>
                </div>
            </div>
            `;

                      $(".cardWrapper").appendChild(card);
        }
      });
    })
  }
  

  filterByTypes();


  function sortData(){
      $("#sortByAlphabet").addEventListener('change', (e)=>{
        if(e.target.value == 'a-z'){
          let normal = pokemons.sort((a, b)=> a.name - b.name)
          normal.forEach((evt)=>{
                             const card = document.createElement("div");
                      card.setAttribute("class", "card mb-4");
                      card.innerHTML = `
        <img src="${evt.img}" width="157" height="157" alt="" class="mx-auto">
             <div class="card-body">
                <strong class="name">${evt.name}</strong>
                <p class="type">${evt.type}</p>
                <div class="card-properties d-flex">
                    <strong class="weight">${evt.weight}</strong>
                    <strong class="age">${
                      evt.candy_count ? evt.candy_count + "age" : "none"
                    }</strong>
                </div>
            </div>
            `;

                      $(".cardWrapper").appendChild(card);
          })
        }else if(e.target.value == 'z-a'){
          let reverse = pokemons.sort((a, b) => b.name - a.name)
          reverse.forEach((evt)=>{
                                       const card =
                                         document.createElement("div");
                                       card.setAttribute("class", "card mb-4");
                                       card.innerHTML = `
        <img src="${evt.img}" width="157" height="157" alt="" class="mx-auto">
             <div class="card-body">
                <strong class="name">${evt.name}</strong>
                <p class="type">${evt.type}</p>
                <div class="card-properties d-flex">
                    <strong class="weight">${evt.weight}</strong>
                    <strong class="age">${
                      evt.candy_count ? evt.candy_count + "age" : "none"
                    }</strong>
                </div>
            </div>
            `;

                                       $(".cardWrapper").appendChild(card);
          })
        }
      });
  }



sortData();


  


  

  




