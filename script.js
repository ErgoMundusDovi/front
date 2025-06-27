fetch('https://back-end-63xf.vercel.app/year')
.then(response=> response.json()
.then(data=>{
    document.querySelector('.date').innerHTML += `<p>${data}</p>`
}))
