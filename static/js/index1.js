document.getElementById("countryForm").addEventListener("submit", function (e) {
    e.preventDefault();

 
    const countryName = document.getElementById("countryInput").value;

 
    fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const country = data[0]; 
                
                const capital = country.capital;
                const flag = country.flags.svg;
                const currency = country.currencies[0].name;
                const languages = country.languages.map(lang => lang.name).join(", ");

        
                const countryInfo = document.getElementById("countryInfo");
                countryInfo.innerHTML = `
                    <h2>${countryName}</h2>
                    <p>Capital: ${capital}</p>
                    <p>Currency: ${currency}</p>
                    <p>Languages: ${languages}</p>
                    <img src="${flag}" alt="Flag of ${countryName}" />
                `;
            } else {
                document.getElementById("countryInfo").innerHTML = "Country not found.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("countryInfo").innerHTML = "An error occurred while fetching data.";
        });
});
