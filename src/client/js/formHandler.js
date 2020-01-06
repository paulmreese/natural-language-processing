function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
    // get text from form field
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
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
