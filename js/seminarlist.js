if (seminars.length === 0) {
    document.getElementById(
        "seminars"
    ).innerHTML = `<h4>No seminars yet. </h4>`;
} else {
    let seminarsHTML = "";
    for ({ title, id, date, speaker } of seminars) {
        seminarsHTML += `<div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"><span><a
              href="seminarpage.html?id=${id}"
              ><strong
                >${title}
              </strong></a
            ></span</h3>
        </div>
        <div class="panel-body">
          <strong>Speaker:</strong> <span> ${speaker} </span></br>
          <strong>Date/Time:</strong> <span> ${date} </span>
        </div>
      </div>`;
    }
    document.getElementById("seminars").innerHTML = seminarsHTML;
  }
