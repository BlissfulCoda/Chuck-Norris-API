const buttonJokes = document.querySelector(".get-jokes");

//ButtonJoke eventListener
buttonJokes.addEventListener('click', fetchJokes);

//Function FetchJokes
function fetchJokes(e){
    //input jokes from the user
    const numberOfJokes = document.querySelector('input[type="number"]').value;
    
    //Display jokes in the browser
    const displayJokes = document.querySelector('.jokes')
    
    //use the fetch API to collect the jokes
    fetch(`http://api.icndb.com/jokes/random/${numberOfJokes}`)
    //promise to collect the json data, which returns a promise
    .then(res =>{
        return res.json();
    })
    .then(jokes =>{
        let output = '';
        jokes.value.forEach(joke =>{
            //append the new jokes to the previous joke
            output += `<li> ${joke.joke}</li>`
            displayJokes.innerHTML = output;
        })
    })

    e.preventDefault();
}
