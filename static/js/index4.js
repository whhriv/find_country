console.log("Hey, it is me, the index");
pageLoader();

function pageLoader(){
    console.log('loading page with functionality')
    const findCountryForm = document.querySelector('#find-country-form')
    findCountryForm.addEventListener('submit',e => findCountry(e));

}

function findCountry(e){

    const url = `https://restcountries.com/v3.1/name/${countryName}`
    console.log(url)

    fetch(url)
        .then(res => res.json())
        
        .then(data => {
            const countryInfo = data[0]; // Assuming you want information about the first result

            // Update the HTML elements with the fetched data
            document.getElementById("capital").textContent = countryInfo.capital || "Not available";
            document.getElementById("languages").textContent = countryInfo.languages.join(", ") || "Not available";
            document.getElementById("currency").textContent = countryInfo.currencies[0].name || "Not available";
            document.getElementById("flag").src = countryInfo.flags[0] || "";
            })
            .catch(err => console.lor.error(err))
        }





        //.then(data => initialize(data.filter(item => item.name === 'country')))
    

// function displayCounty(data){
//     let cdata = data
//     const div = document.createElement('div');
//     div.setAttribute("id","country-capital");
//     div.textContent = cdata.text;
//     document.body.appendChild(div);

//     }
    
    // let capitalDiv = document.getElementById('divID');
    // const capitalCreate = document.createElement('capitalCreate');
  
    //for (let country of data) {

        //  `<h3>${country.capital}</h3>`
        // `<p>${country.name.common}</p>`

    // return 
    // <div class="countries">
    // <h2>${country.name.common}</h2>
    // </div>
    // <img src="${country.flags.png}">
    // <img src="${country.coatOfArms.png}">
    // <h4>Languages: ${country.languages}</h4>
    // <h4>Capital: ${country.capital}</h4>
    // <h4>Currency:${country.currencies} </h4>
    // </div>`;
