const projects = [
  {
    title: "Engineering Curricula Study",
    id: 0,
    abstract: `Despite being the most challenging path of study, engineering 
      occupations are among the highest-paying and most prestigious 
      in the US labor market and only require a bachelor's degree for an
      entry level position. Although there are many engineering 
      programs throughout the US, a few stand out among the rest. We 
      have chosen top 20 peer comparison groups based on the U.S. 
      News & World Report 2022 Best Undergraduate Engineering 
      Programs rankings. In this study we are collecting the degree plan
      from public websites, using Julia programming language analyzing
      curricula and degree plans across the 20 top tier schools of United
      States in five different highest paid engineering disciplines to 
      achieve the structural equity in higher education. The goal is to 
      set a new standard for curriculum review and reform that will 
      dramatically affect time to degree and on time graduation success, especially for students with limited incomes or otherwise
      challenged after the pandemic.  `,

    video: "",
    image: "img/engineering-study.png",
  },
  {
    title: "CAP Project",
    id: 1,
    abstract: `This project focuses on exploring and validating the use of the open-source Curricular Analytics Toolbox as an effective means to achieve 
    equitable student success and close achievement gaps for Pell recipients at public and private research universities.32 research universities who have 
    30 percent or higher Pell recipient undergraduate students are participating in this project. The main purpose of this project is to validate the 
    relationship between curricular structure (eg. overall complexity, course bottlenecks, unnecessary prerequisites) and time to degree and reduce 
    achievement gaps for the undergraduate students and Pell recipients. The outcomes of this project will be used to guide institutional change that will 
    benefit undergraduate students for greater academic success. This project is currently funded by UERU/Ascendium Education Group.</br> Curricular 
    Analytics toolbox Website : <a href="https://curricularanalytics.org">https://curricularanalytics.org </a></br>UERU website: <a href="https://ueru.org/">https://ueru.org</a> `,
    link: "projects.html#cap",
    video: "",
    image: "img/cap.png",
  },
  {
    title: "Curricular Analytics Infrastructure",
    id: 2,
    abstract: `The goal of this project is to design a new data warehouse for curricular analytics applications, which collects data from our current database and can store curricula, degree plans, and degree requirements.We seek to design a new system that is easy to query, maintainable, and scalable.</br> scope of the project:</br> 
    1. Provide a comprehensive documentation of the current blackbriar database design </br>
    2. Provide a writeup of the existing blackbriar use cases (blackbriar-admin, blackbriar-podium, the transfer site, CA_API)</br>
    3. Collect, organize, clean, and consolidate existing blackbriar documentation</br>
    4. Provide a high-level design of a new blackbriar database that would satisfy the use cases of existing applications</br>
    5. Provide high-level design of a new blackbriar api </br>
    tracking project : <a href="https://myua.atlassian.net/jira/software/projects/VIP/boards/5">myua.atlassian.net/jira/software/projects/VIP</a>`,
    video: "",
    image: "img/infrastructure.png",
  },
  {
    title: "Transfer Student Portal",
    id: 3,
    abstract: `Transfer Student Portal is a single page application that makes it easy for students to transfer to other schools. Students can use this website to pick their starting school, completed courses, as well as their destination school and program In order to receive a transfer report which is a degree plan to completion </br>
      Tracking project: <a href="https://myua.atlassian.net/jira/software/projects/TA/boards/4">myua.atlassian.net/jira/software/projects/TA</a>`,

    video: "",
    image: "img/transfer-portal.png",
  },
  {
    title: "Cohort Analytics",
    id: 4,
    abstract: `Tracking project : <a href="https://myua.atlassian.net/jira/software/projects/CA/boards/1">myua.atlassian.net/jira/software/projects/CA</a>`,

    video: "",
    image: "",
  },
  {
    title: "CatCoin",
    id: 5,
    abstract: `CatCoin is a campus-based cryptocurrency used for the purposes of teaching students about various aspects of Distributed Ledger Technology 
    and incentivizing student outcomes aligned with institutional values, as a part of University of Arizona’s strategic plan as preparing students to 
    thrive and make positive societal contributes as a part of the ongoing Fourth Industrial Revolution.</br> Tracking project : 
    <a href="https://myua.atlassian.net/jira/software/projects/CAT/boards/3">myua.atlassian.net/jira/software/projects/CAT</a>`,

    video: "",
    image: "",
  },
  {
    title: "Learning Outcomes Optimization",
    id: 6,
    abstract: `The use of learning outcomes in higher education is now a ubiquitous part of continuous quality improvement efforts. Learning outcomes are 
    typically expressed as statements of what a learner is expected to know, understand and be able to demonstrate at the end of some learning experience.
    For instance, it is common practice for academic program administrators to articulate a set of program-level learning outcomes that outline what 
    learners should know and be able to do once they complete an academic program. It has been studied that the curricular complexity has an impact on 
    students' graduation rate. The goal of this project is to construct curricula in an optimal way in terms of minimizing curricular complexity, given a set of learning outcome.`,
    video: "",
    image: "",
  },
];
let projectListHTML = "";
for ({ title, id } of projects) {
  projectListHTML += `<li role="presentation"><a href="projectpage.html?id=${id}">${title}</a></li>`;
}
document.getElementById("projects").innerHTML = projectListHTML;

if (publications.length === 0) {
  document.getElementById(
    "project-content"
  ).innerHTML = `<h4>No projects yet. </h4>`;
} else {
  let projectsHTML = "";

  for ({ title, abstract, id } of projects) {
    projectsHTML += `
    <h1><a href="projectpage.html?id=${id}">${title}</a></h1>
    <p class="lead">
      ${abstract}
    </p>
    
    <hr></hr>`;
  }
  document.getElementById("project-content").innerHTML = projectsHTML;
}
