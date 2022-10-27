const faculty = [
  {
    fullName: "Gregory Heileman",
    bio: "PhD in computer engineering, University of Central Florida, 1989, MS in biomedical engineering and mathematics, University of North Carolina at Chapel Hill, 1986, His research includes Machine learning and data analytics, information security",
    image: "Greg-Heileman.jpg",
  },
];
const studnets = [
  {
    fullName: "Husain Alyusuf",
    bio: "Ph.D. student in the Electrical and Computer Engineering Department at the University of Arizona. His research interest includes machine learning, data analytics and curricula optimization. He is currently working on Cohort Analytics project.",
    image: "Husain-Al-Yusuf.jpg",
  },
  {
    fullName: "Yiming Zhang",
    bio: "Ph.D. student in the Electrical and Computer Engineering Department at the University of Arizona. His research interest includes machine learning, data analytics and curricula optimization. He is currently working on Learning Outcomes Optimization and Transfer Student Portal projects.",
    image: "yiming-zhang.jpg",
  },
  {
    fullName: "HReya Jijy Abraham",
    bio: "Master’s student in the Electrical and Computer Engineering Department at the University of Arizona. Her research interest includes data analysis and Machine learning. she has made contributions to the Transfer Student Portal and CatCoin projects. She is currently working on the UERU Curricular Analytics Project.",
    image: "Reya.jpg",
  },
  {
    fullName: "Melika Akbarsharifi",
    bio: "Master’s student in the Electrical and Computer Engineering Department at the University of Arizona. Her research interest includes data analysis, software engineering and Machine learning. She is currently working on the transfer student portal and Curricular Analytics Infrastructure projects.",
    image: "Melika-Akbarsharifi.jpg",
  },
  {
    fullName: "Roxana Akbarsharifi",
    bio: "Master’s student in the Electrical and Computer Engineering Department at the University of Arizona. Her research interest includes data analysis, software engineering and Machine learning. She is currently working on the transfer student portal and Curricular Analytics Infrastructure projects.",
    image: "Roxana.jpg",
  },
  {
    fullName: "Raian Islam",
    bio: "Master’s student in the Electrical and Computer Engineering Department at the University of Arizona. Her research interest includes data analytics, machine learning and photovoltaics.She is currently working on the Curricular Analytics Project and Engineering Curricula Study projects.",
    image: "Raian.jpg",
  },
  {
    fullName: "Tanmay Agrawal",
    bio: "Junior student in Computer Science at University of Arizona. He is working on dashboards to help visualize student learning outcomes, as well as CatCoin, the in-house cryptocurrency at the University of Arizona. He has a knack for trying to understand the larger picture, be it socio-political revolutions, or maybe the large-scale impact of the projects he works on.",
    image: "Tanmay.png",
  },
  {
    fullName: "Hayden Free",
    bio: "master’s student at Georgia Tech. He is working on... ",
    image: "Hayden.jpeg",
  },
];

let facultyHTML = "";
for ({ fullName, bio, image } of faculty) {
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
`;
}
let studentsHTML = "";
for ({ fullName, bio, image } of studnets) {
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
    `;
}
document.getElementById("faculty").innerHTML = facultyHTML;
document.getElementById("students").innerHTML = studentsHTML;
