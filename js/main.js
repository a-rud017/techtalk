document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
    fetch(`https://api.quotable.io/random?tags=technology&famous-quotes`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = `"${data.content}"`
            document.querySelector('h4').innerText = data.author
        })
        .catch(err => {
            console.log(`error ${err}`)
     })  
}

