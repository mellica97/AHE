const publications = [
  {
    title: "The Transfer Student Experience: It's A Lot Like Buying a Used Car",
    authors: "Gregory L Heileman, Chaouki T Abdallah, Andrew K Koch",
    date: "2022/3/1",
    description: `The experience transfer students encounter as they navigate their journeys from community college to university is similar 
        to that of buying a used car. We demonstrate this by showing how the information asymmetry in the market for used cars also occurs in the
        market for transfer students, producing inefficient markets in both cases, thereby increasing the chances of adverse selection. We diagnose 
        the underlying conditions that produce transfer inefficiencies, identifying them as a structural inequity within the system of higher education.
        Finally, recommendations for alleviating information asymmetry in transfer processes, that would lead to better outcomes for transfer students, 
        are provided.`,
    link: "https://arxiv.org/abs/2203.00610",
  },
  {
    title: "A Markov Decision Processes Modeling for Curricular Analytics",
    authors:
      "Ahmad Slim, Husain Al Yusuf, Nadine Abbas, Chaouki T Abdallah, Gregory L Heileman, Ameer Slim",
    date: "2021/12/13",
    description: `The curricular structure and the complexity of the prerequisite dependencies in a curriculum are essential factors that impact
        student progression, and ultimately graduation rates. However, we are not aware of any closed-form methods for quantifying the relationship 
        between the complexity of a curriculum and the graduation rate of those attempting to complete the curriculum. This paper introduces a new method 
        that quantifies this relationship using Markov Decision Processes (MDP). The non-deterministic nature of student progress along with their evolving
        states at each semester make MDP a suitable framework for this work. We propose a novel model that is useful due to the fact that it provides a 
        closed-form solution approach that can be utilized to perform “what-if” analyses around student progress through a curriculum. The results confirm
        the inverse relationship between the complexity of a curriculum and the …`,
    link: "https://ieeexplore.ieee.org/abstract/document/9680226",
  },
  {
    title: "Analysis of the ARTMAP Neural Network Architecture",
    authors: "Michel Georgiopoulos, Juxin Huang, Gregory L Heileman",
    date: "2021/9/9",
    description: `In this paper we analyze the ARTMAP architecture for situations requiring learning of many-to-one maps. Our point of focus is 
        the number of list presentations required by ARTMAP to learn an arbitrary many-to-one map. In particular, it is shown that if ARTMAP is repeatedly 
        presented with a list of input/output pairs, it establishes the required mapping in at most Ma − 1 list presentations, where Ma corresponds to the 
        total number of ones in each one of the input patterns. Other useful properties, associated with the learning of the mapping represented by an 
        arbitrary list of input/output pairs, are also examined. These properties reveal some of the characteristics of learning in ARTMAP when it is used 
        as a tool in establishing an arbitrary mapping from a binary input space to a binary output space. The results presented in this paper are valid 
        for the fast learning case, and for small βa …`,
    link: "https://www.taylorfrancis.com/chapters/edit/10.4324/9781315784076-67/analysis-artmap-neural-network-architecture-michel-georgiopoulos-juxin-huang-gregory-heileman",
  },
  {
    title:
      "The Science of Electronics in Extreme Electromagnetic Environments II-Circuit Effects",
    authors:
      "Sameer Hemmady, Edl Schamiloglu, Payman Zarkesh-Ha, Ganesh Balakrishnan, Greg Heileman, David Dietz, Salvador Portillo, Manel Martinez-Ramon, Thomas M Antonsen, Neil Goldsman, Edo Waks",
    date: "2021/1/4",
    description: `This abstract covers Part-II of a two-part presentation series on the scientific advancements made in the AFOSR/AFRL Center of 
        Excellence (CoE) for Electronics in Extreme Electromagnetic Environments, spanning the time-period 2015-present. In specific, this presentation 
        focuses on the development and experimental validation of statistical and deterministic physics-based predictive models describing the functional 
        state of electronic devices (semiconductor, electro-optic and quantum), and the amalgamation of these devices to circuits and subcomponents, when 
        subjected to extreme electromagnetic interference (EEMI). This presentation follows a companion presentation [1] which discusses the development 
        and experimental validation of statistical and deterministic physics-based models describing coupling paradigms for EEMI in complicated enclosures
        which houses these sensitive electronic devices, circuits …`,
    link: "https://ieeexplore.ieee.org/abstract/document/9336483",
  },
  {
    title: "Restructuring Curricular Patterns Using Bayesian Networks.",
    authors:
      "Ahmad Slim, Gregory L Heileman, Chaouki T Abdallah, Ameer Slim, Najem N Sirhan",
    date: "2021",
    description: `Recent studies proved the existence of a relationship between the complexity of university curricula and graduation rates. 
        As a result, extensive efforts have been done in an attempt to restructure curricula in order to improve graduation rates. In this paper, 
        we propose a new model for evaluating and quantifying the impact of restructuring curricula on graduation rates using a Bayesian network framework. 
        We validate our model by analyzing a common curricular pattern found in most of the engineering programs. We demonstrate its usefulness using actual
        data for students at the University of New Mexico. We also extend this model to include a helpful tool that can be used to predict student 
        performance. The advantage of our work is characterized by its data-driven nature which makes it more reliable than other proposed models.`,
    link: "https://educationaldatamining.org/EDM2021/virtual/static/pdf/EDM21_paper_48.pdf",
  },
  {
    title: "Curricular Complexity Versus Quality of Computer Science Programs",
    authors:
      "Gregory L Heileman, Hayden W Free, Johnny Flynn, Camden Mackowiak, Jerzy W Jaromczyk, Chaouki T Abdallah",
    date: "2020/6/11",
    description: `In this research paper we describe a study that involves measuring the complexities of undergraduate curricula offered by computer science 
    departments, and then comparing them to the quality of these departments, where quality is determined by a metric-based ranking system. The study 
    objective was to determine whether or not a relationship exists between the quality of computer science departments and the complexity of the curricula 
    they offer. The relationship between curricular complexity and program quality was previously investigated for the case of undergraduate electrical 
    engineering programs, with surprising results. It was found that if the US News & World Report Best Undergraduate Programs ranking is used as a proxy 
    for quality, then a statistically significant difference in curricular complexities exists between higher and lower quality electrical engineering 
    programs. Furthermore, it was found that higher quality electrical engineering programs tend to have lower complexity curricula, and vice versa. In the 
    study reported in this paper, a sufficient amount of data was collected in order to determine that an inverse relationship between program quality and 
    curricular complexity also exists in undergraduate computer science departments. This brings up an interesting question regarding the extent to which 
    this phenomenon exists across the spectrum of STEM disciplines.`,
    link: "https://arxiv.org/abs/2006.06761",
  },
  {
    title:
      "A Hamilton-Jacobi Equation for Evaluating EEMI Propagation in a Computing System",
    authors:
      "Luis Valbuena, Gregory L Heileman, Sameer Hemmady, Edl Schamiloglu",
    date: "2019/9/9",
    description: `In this paper, we present a theoretical framework for modeling the empirically observed cascading of software failures on a complicated 
    computing system exposed to extreme electromagnetic interference (EEMI). Our approach is to treat the temporal evolution of the electromagnetic coupling
    and the resultant cascading series of electromagnetic-induced faults as the “flow” in a dynamic fluid-mechanical system and thereby utilize aspects of
    the Navier Stokes and Hamilton-Jacobi equations to predict the rate of this flow. Therefore, inspired by the concepts of fluid dynamics [1], we 
    include a diffusion term in the Hamilton-Jacobi-Isaacs (HJI) equation. We have considered two approaches. In one we apply a Taylor expansion to the 
    optimality principle and consider additional terms; in the other scenario, we simply add a diffusion term in the form of a Laplacian applied to the 
    cost function H(x,...) and some constant c, as it is …`,
    link: "https://ieeexplore.ieee.org/abstract/document/8879393",
  },
  {
    title: "Simplified Flip-Flop Gate Model for EEMI Injection",
    authors:
      "Luis Valbuena, Gregory L Heileman, Sameer Hemmady, Edl Schamiloglu",
    date: "2019/9/9",
    description: `We present a second order dynamical system to represent the behavior of a D flip-flop. We employ windowing functions and vector fields to 
    replicate a characteristic found in [1], which resorts to switching. The model also takes into account metastable behavior, which can be exploited when 
    studying software execution faults due to an undefined logical state. We conceived the noise injection to be additive noise targeting the transition 
    between the stable equilibrium points. However, the model is flexible and many parameters can be changed to alter its behavior.`,
    link: "https://ieeexplore.ieee.org/abstract/document/8879367",
  },
  {
    title: "Does curricular complexity imply program quality?",
    authors:
      "Greg L Heileman, William G Thompson-Arjona, Orhan Abar, Hayden W Free",
    date: "2019/6/15",
    description: `A number of metrics exist for quantifying the complexity of academic program curricula. Complexity in this case relates the extent to which the 
    structure of a curriculum impacts a student's ability to progress through that curriculum towards graduation. The ability to quantify curricular 
    complexity in this manner allows us to order programs according to their complexity, and to compare and contrast similar programs at different 
    institutions according to their complexity measures. When sharing this type of information with faculty and program administrators, those at programs 
    at the higher end of the complexity scale often speculate that high complexity implies a higher quality program. Which leads to the more general 
    question, what does curricular complexity tell us about program quality? In cursory investigations of this conjecture, a surprising relationship 
    emerged. Specifically, anecdotal review provided significant evidence to support the proposition that higher quality engineering programs have lower 
    complexity curricula. It is worth noting that if this proposition is indeed true, then the contrapositive proposition is also true, namely that higher 
    complexity curricula imply lower quality programs. In this study we collected sufficient data to determine the veracity of this proposition for 
    undergraduate electrical engineering programs. Additional work is underway to validate this proposition for other engineering areas.`,
    link: "https://peer.asee.org/does-curricular-complexity-imply-program-quality",
  },
  {
    title: "ABET Won't Let Us Do That!",
    authors: "Gregory L Heileman, Chaouki T Abdallah",
    date: "2019/5/4",
    description: `While occupying various academic leadership positions, we repeatedly encounter the use of ABET accreditation to influence decision 
    making around engineering curricula. For instance, ABET criteria are commonly cited as the reason why particular changes to engineering programs, 
    such as the required number of credit hours, cannot be considered. Sometimes the ABET criteria are so broadly cited that it is not possible to 
    determine the particular criterion that might be violated by a proposed change. The final sentence in these conversations is typically,“ABET won’t 
    let us do that!” In other cases, we have found incorrect interpretations of ABET program criteria that simply block further conversation. During a 
    recent accreditation visit, an administrator asked the visiting team to issue a statement informing their state legislature that, because of ABET 
    criteria, engineering programs cannot have less than 124 credit hours …`,
    link: "https://www.tandfonline.com/doi/abs/10.1080/00091383.2019.1606613",
  },
];

if (publications.length === 0) {
  document.getElementById(
    "publications"
  ).innerHTML = `<h4>No publications yet. </h4>`;
} else {
  let publicationsHTML = "";
  for ({ title, authors, date, description, link } of publications) {
    publicationsHTML += `<div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title"><span><a
            href=${link}
            ><strong
              >${title}
            </strong></a
          ></span</h3>
      </div>
      <div class="panel-body">
        <strong>Speaker:</strong> <span> ${authors} </span></br>
        <strong>Date:</strong> <span> ${date} </span></br>
        <strong>Description:</strong> <span> ${description} </span>
      </div>
    </div>`;
  }
  document.getElementById("publications").innerHTML = publicationsHTML;
}
