fetch('https://exo-caps-back-end.vercel.app/')
.then(response=> response.json()
.then(data=>{
    document.querySelector('.date').innerHTML += `<p>${data}</p>`
}))
