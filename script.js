fetch('https://back-end-63xf.vercel.app/year')
.then(response=> response.json()
.then(data=>{
    document.querySelector('#date').innerHTML += ` <h1 class="date">${data}</h1>`
}))
