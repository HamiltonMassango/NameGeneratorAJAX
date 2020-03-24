document.querySelector('#generate-names').addEventListener('submit', loadNames);

// Execute the function to query the API
function loadNames(event) {
    event.preventDefault();

    // Read the values from the form creae the variaveis 
    const origin = document.querySelector('#country').value;
    const genre = document.querySelector('#genre').value;
    const amount = document.querySelector('#quantity').value;

    // Build the URL
    let url = 'http://uinames.com/api?';
    
    // Read the origin and append to the url

    if(origin){
        url += `region=${origin}&`;
    }

    // Read the genre and append to the url

    if(genre){
        url += `gender=${genre}&`;
    }

    // Read the amount and append to the url

    if(amount){
        url += `amount=${amount}&`;
    }
}