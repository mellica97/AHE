const faculty = [
    {
        fullName: "Gregory Heileman",
        bio: "PhD in computer engineering, University of Central Florida, 1989, MS in biomedical engineering and mathematics, University of North Carolina at Chapel Hill, 1986, His research includes Machine learning and data analytics, information security",
        image: "Greg-Heileman.jpg"
    },
    {
        fullName: "Gregory Heileman",
        bio: "PhD in computer engineering, University of Central Florida, 1989, MS in biomedical engineering and mathematics, University of North Carolina at Chapel Hill, 1986, His research includes Machine learning and data analytics, information security",
        image: "Greg-Heileman.jpg"
    }
];
const studnets = [
    {
        fullName: "Husain Alyusuf",
        bio: "Currently pursuing a PhD in Electrical and Computer Engineering at the University of Arizona.He is a research assistant in the Electrical and Computer Engineering Laboratory.",
        image: "Husain-Al-Yusuf.jpg"
    },
    {
        fullName: "Husain Alyusuf",
        bio: "Currently pursuing a PhD in Electrical and Computer Engineering at the University of Arizona.He is a research assistant in the Electrical and Computer Engineering Laboratory.",
        image: "Husain-Al-Yusuf.jpg"
    },
    {
        fullName: "Husain Alyusuf",
        bio: "Currently pursuing a PhD in Electrical and Computer Engineering at the University of Arizona.He is a research assistant in the Electrical and Computer Engineering Laboratory.",
        image: "Husain-Al-Yusuf.jpg"
    }
];

let facultyHTML = "";
for ({fullName, bio, image } of faculty) {
    facultyHTML += `
      <div class="col-sm-4">
        <div class="card-deck-wrapper" id="faculty-cart-deck-wrapper">
          <div class="card-deck">
            <div class="card">
              <img
                class="card-img-top"
                data-src="holder.js/100px200/"
                alt="Card image cap"
                src="img/${image}"
              />
              <div class="card-block">
                <h4 class="card-title">${fullName}</h4>
                <p class="card-text">${bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
`;}
let studentsHTML = "";
for ({fullName, bio, image } of studnets) {
    studentsHTML += `
    <div class="card">
    <img
      class="card-img-top"
      data-src="holder.js/100px200/"
      src="img/${image}"
      alt="Card image cap"
    />
    <div class="card-block">
      <h4 class="card-title">${fullName}</h4>
      <p class="card-text">${bio}</p>
    </div>
  </div>
    `;}
document.getElementById("faculty").innerHTML = facultyHTML;
document.getElementById("students").innerHTML = studentsHTML;