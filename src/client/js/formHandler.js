function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
    // get text form field
    let formText = document.getElementById('name').value
    fetch('http://localhost:8080/result', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: formText})
        })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        res['categories'].forEach(function(c) {
            console.log(c);
            for (const i in c) {
                document.getElementById('results').innerHTML += `<p>${i}: ${c[i]}</p>`
            }
        });
    })
}

export { handleSubmit }
