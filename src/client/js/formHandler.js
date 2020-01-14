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
        //initialize taxonomy entries before loop
        document.getElementById('taxonomy').innerHTML =
            `<tr>
                <th colspan="2" scope="rowgroup" class="analysis-type">
                    Classification by Subject Matter
                </th>
            </tr>`
        const taxonomyResponse = res[0];
        const sentimentResponse = res[1];
        (taxonomyResponse.categories).forEach(function(c) {
            //console.log(c);
            /*for (const i in c) {
                if (i != "links") {
                    document.getElementById('taxonomy').innerHTML += `<p>${i}:` +
                    ` ${c[i]}</p>`
                }
            }*/
            document.getElementById('taxonomy').innerHTML +=
                `<tr>
                    <th scope="row" class="iab-category">IAB Category:</th>
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
        document.getElementById('sentiment').innerHTML =
            `<tr>
                <th colspan="2" scope="rowgroup" class="analysis-type">
                    Sentiment Analysis
                </th>
            </tr>
            <tr>
                <th scope="row">Overall Sentiment</th>
                <td>${sentimentResponse.polarity == 'positive'
                    ? '<div class="positive">Positive +</div>'
                    : sentimentResponse.polarity == 'negative'
                    ? '<div class="negative">Negative -</div>'
                    : 'Unknown'}</td>
            </tr>
            <tr>
                <th scope="row">Confidence:</th>
                <td>
                    ${(sentimentResponse.polarity_confidence * 100)
                        .toFixed(2)}\%
                </td>
            </tr>
            <tr>
                <th scope="row" class="sentiment-type">Overall Subjectivity</th>
                <td>${sentimentResponse.subjectivity == 'positive'
                    ? '<div class="positive">Positive +</div>'
                    : sentimentResponse.subjectivity == 'negative'
                    ? '<div class="negative">Negative -</div>'
                    : 'Unknown'}</td>
            </tr>
            <tr>
                <th scope="row">Confidence:</th>
                <td>
                    ${(sentimentResponse.subjectivity_confidence * 100)
                        .toFixed(2)}\%
                </td>
            </tr>`
    })
    .catch(err => document.getElementById('taxonomy').innerHTML =
        `<tr>
            <th colspan="2" scope="rowgroup" class="analysis-type">
                <strong>
                    Please enter a valid URL <br/>
                    (beginning with "http:\/\/..." or "https:\/\/...")
                </strong>
            </th>
        </tr>`)
}

export { handleSubmit }
