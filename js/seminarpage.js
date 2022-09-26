const urlParams = new URLSearchParams(window.location.search);
seminarData = seminars[urlParams.get("id")];
let seminarDataHTML = ""
 if (seminarData){
    seminarDataHTML = `
            <p class="lead margin">
              ${seminarData.title}
            </p>
            <h3>Abstract:</h3>
            <p>
              ${seminarData.abstract}
            </p>
            <h3>Speaker:</h3>
            <p>${seminarData.speaker}</p>

            <h3>Date/Time</h3>
            <p>${seminarData.date}</p>
            <h3>Video</h3>
            <p class="mb-5">
              <a href="${seminarData.video}">
                 ${seminarData.video}
              </a>
            </p>
`;}
document.getElementById("seminar-data").innerHTML = seminarDataHTML;