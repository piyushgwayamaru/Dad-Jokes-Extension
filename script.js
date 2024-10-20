fetch ('https://official-joke-api.appspot.com/random_joke')
// fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.setup;
        const jokePunch = jokeData.punchline;
        const jokeElement = document.getElementById('jokeElement')

        jokeElement.innerHTML = `${jokeText}<br>${jokePunch}`;
    }) 
    
    // .then(response => response.json())
    // .then(jokeData => {
    //     const setupText = jokeData.setup;
    //     const punchlineText = jokeData.punchline;
    //     const jokeElement = document.getElementById('jokeElement');
    
    //     jokeElement.innerHTML = `<strong>Setup:</strong> ${setupText}<br><strong>Punchline:</strong> ${punchlineText}`;
    // })
    // .catch(error => {
    //     console.error('Error fetching joke:', error);
    //     const jokeElement = document.getElementById('jokeElement');
    //     jokeElement.innerHTML = 'Oops! Something went wrong.';
    // });
