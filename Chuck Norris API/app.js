const jokeButton = document.querySelector(".get-jokes");

//jokebutton eventlistener
jokeButton.addEventListener('click', getJokes);

//getjokes function
function getJokes(e){
    //variable for selecting the input
    const numberOfJokes = document.querySelector('input[type="number"]').value;
    

    //create an XHR Object
    const xhr = new XMLHttpRequest();

    //make an external asynchronous request from the chuck norris api
    xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    
    xhr.onload = function(){
        //check if the request status is OK
        if(this.status === 200){

            //parse all response jokes
            const allJokes = JSON.parse(this.responseText);
            
            //created an empty string as a container for the jokes
            let displayJokes = '';

            //check if the joke status type returned is equal to success & if so, display the jokes
            if(allJokes.type === 'success'){

                //loop through the jokes value since it's returned as an array
                allJokes.value.forEach(joke =>{
                    displayJokes += `<li>${joke.joke}</li>`
                });
            } else {
                //if the status jokes type is not 'success', then display this message
                displayJokes = `<li> Sorry! No Jokes Found! </li>`
            }

            //grab the jokes class from index.html
            const output = document.querySelector(".jokes");

            //append the jokes and display them to the browser
            output.innerHTML = displayJokes;
        }
    }

    xhr.send();

    e.preventDefault();
}