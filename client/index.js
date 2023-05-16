const cards = document.querySelector('#cards');

async function listHus() {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

  let response = await fetch('http://localhost:3000/hus/all', options)
    .catch(e => {console.log(e);});
  let hus = await response.json();

  for (const ettHus of hus) {
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.style.width = '100%';
    img.alt = ettHus.address;
    let container = document.createElement('div');
    container.classList.add('container');
    let h4 = document.createElement('h4');
    let bold = document.createElement('b');
    bold.textContent = ettHus.address;
    h4.appendChild(bold);
    let descr = document.createElement('p');
    descr.innerHTML = ettHus.description;

    let dl = document.createElement('dl');

    let dtRoom = document.createElement('dt');
    dtRoom.innerText = 'Rooms';
    let dtSize = document.createElement('dt');
    dtSize.innerText = 'Size';
    let dtYear = document.createElement('dt');
    dtYear.innerText = 'Year';
    let dtPrice = document.createElement('dt');
    dtPrice.innerText = 'Price';

    let ddRoom = document.createElement('dd');
    let ddSize = document.createElement('dd');
    let ddYear = document.createElement('dd');
    let ddPrice = document.createElement('dd');

    ddRoom.innerHTML = ettHus.rooms;
    ddSize.innerHTML = ettHus.size;
    ddYear.innerHTML = ettHus.yearBuilt;
    ddPrice.innerHTML = ettHus.price;

    dl.innerHTML += dtRoom.outerHTML + ddRoom.outerHTML +
                    dtSize.outerHTML + ddSize.outerHTML +
                    dtYear.outerHTML + ddYear.outerHTML +
                    dtPrice.outerHTML + ddPrice.outerHTML;

    container.innerHTML += h4.outerHTML + descr.outerHTML + dl.outerHTML;
    card.innerHTML += img.outerHTML + container.outerHTML;

    cards.appendChild(card);
  };
};

listHus();
