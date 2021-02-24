const requestURL3 = 'data/tours.json';

fetch(requestURL3)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const tours = jsonObject['tours']
    for (let i = 0; i < tours.length; i++) {
      
      let cardBox = document.createElement('article');
      let card = document.createElement('div');
      let divPicSummary = document.createElement('div');
      let img = document.createElement('img');
      let divSummary = document.createElement('div');
      let name = document.createElement('h4');
      let span = document.createElement('span');
      let price = document.createElement('p');
      let description = document.createElement('p');
      let divTimeDuration = document.createElement('div');
      let timeImg = document.createElement('img');
      let duration = document.createElement('p');
      let divCheckCancel = document.createElement('div');
      let checkImg = document.createElement('img');
      let cancel = document.createElement('p');
      let divCheckSafety = document.createElement('div');
      let checkImg2 = document.createElement('img');
      let safety = document.createElement('p');


      cardBox.setAttribute('class', 'cardBox');
      
      card.setAttribute('class', 'card');
      
      divPicSummary.setAttribute('class', 'divPicSummary');
      img.setAttribute('src', tours[i].imageurl);
      img.setAttribute('alt', 'tourImage');
      
      
      divSummary.setAttribute('class', 'divSummary');
      span.setAttribute('id', 'price');
      span.innerHTML = tours[i].price;
      price.setAttribute('class', 'priceBox');
      price.innerHTML = "from "; 
      name.innerHTML = tours[i].name;
      description.innerHTML = tours[i].description;
      description.setAttribute('class', 'description');

      divTimeDuration.setAttribute('class', 'divInline');
      timeImg.setAttribute('src', 'images/time.png');
      timeImg.setAttribute('alt', 'timeImage');
      timeImg.setAttribute('id', 'iconTime');
      duration.innerHTML = tours[i].duration;

      divCheckCancel.setAttribute('class', 'divInline');
      checkImg.setAttribute('src', 'images/checked.png');
      checkImg.setAttribute('alt', 'checkImage');
      checkImg.setAttribute('class', 'iconCheck');
      cancel.innerHTML = tours[i].cancel;

      divCheckSafety.setAttribute('class', 'divInline');
      checkImg2.setAttribute('src', 'images/checked.png');
      checkImg2.setAttribute('alt', 'checkImage');
      checkImg2.setAttribute('class', 'iconCheck');
      safety.innerHTML = tours[i].safety;
      


      cardBox.appendChild(card);
      card.appendChild(divPicSummary);
      divPicSummary.appendChild(img);
      
      divPicSummary.appendChild(divSummary);
      divSummary.appendChild(price);
      divSummary.appendChild(name);
      price.appendChild(span);
      divSummary.appendChild(description);
      
      divSummary.appendChild(divTimeDuration);
      divTimeDuration.appendChild(timeImg);
      divTimeDuration.appendChild(duration);
      
      divSummary.appendChild(divCheckCancel);
      divCheckCancel.appendChild(checkImg);
      divCheckCancel.appendChild(cancel);
      
      divSummary.appendChild(divCheckSafety);
      divCheckSafety.appendChild(checkImg2);
      divCheckSafety.appendChild(safety);
      

      document.querySelector('.tourBox').appendChild(cardBox);

    }
});