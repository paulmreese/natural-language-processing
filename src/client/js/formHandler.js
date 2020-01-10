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
            //console.log(c);
            /*for (const i in c) {
                if (i != "links") {
                    document.getElementById('taxonomy').innerHTML += `<p>${i}:` +
                    ` ${c[i]}</p>`
                }
            }*/
            //alternative to looping through all params, use desired params
            //can remove results initialization as the result!
            document.getElementById('taxonomy').innerHTML =
                `<tr>
                    <th colspan="2" scope="rowgroup">
                        Classification by Taxonomy
                    </th>
                </tr>
                <tr>
                    <th scope="row">IAB Category:</th>
                    <td>${c.label}</td>
                </tr>
                <tr>
                    <th scope="row">Confidence:</th>
                    <td>${c.confident ? "High" : "Low"} \(${(c.score * 100)
                        .toFixed(2)}\% Match\)
                    </td>
                </tr>`
            //TODO: Add other Aylien API calls to further analyze text
        });
    })
}

export { handleSubmit }
