
document.getElementById("countryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const countryInput = document.getElementById("countryInput").value;

 
    fetch(`https://restcountries.com/v2/name/${countryInput}`)
        .then((response) => response.json())
        .then((data) => {
            const countryInfo = data[0]; // Assuming you want information about the first result

            // Update the HTML elements with the fetched data
            document.getElementById("capital").textContent = countryInfo.capital ;
            document.getElementById("languages").textContent = countryInfo.languages.join(", ") ;
            document.getElementById("currency").textContent = countryInfo.currencies[0].name ;
            document.getElementById("flag").src = countryInfo.flags[0] || "";
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            alert("Country information not found.");
        });
});