//47f0cb8e6dbf4d86975e1c0cebe0f37e
fetch(
  "https://api.currencyfreaks.com/latest?apikey=47f0cb8e6dbf4d86975e1c0cebe0f37e"
)
  .then((data) => {
    let mydata = data.json();
    return mydata;
  })
  .then((mydata) => {
    let price = document.querySelector("div p span");
    let input = document.querySelector("input");
    input.oninput = function () {
      let data = input.value;
      price.innerHTML = Math.round(data * mydata.rates.EGP);
    };
  });
