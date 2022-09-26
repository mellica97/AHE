const seminars = [
    {
        id: 0,
        title: "Data are not enough - an initial approach to fostering and supporting a data-informed, student-centered institution",
        date: "April 1, 2022, 2:00PM MST (Arizona), 5:00PM Eastern Time",
        speaker: `Marco Molinaro 
        Assistant Vice Provost for Educational Effectiveness 
        UC Davis `,
        video:"https://www.youtube.com/watch?v=H5twoaL4pmA",
        abstract: `
        The curricula structure and the complexity of their prerequisite
        dependencies proved to be essential factors that impact student
        progression and ultimately graduation rates. However, there are no
        available tools in the literature that quantify the relationship
        between the complexity of curricula structure and graduation
        rates. This paper introduces a new method that captures this
        relationship using Markov Decision Processes (MDP). The
        non-deterministic nature of students’ progresses along with their
        evolving states at each semester make MDP a suitable framework for
        this work. The novelty of the proposed model is mainly
        characterized by its closed-form solution approach that can be
        utilized to perform “what-if” analysis upon modifying curricula
        structure. The results confirm the converse relationship between
        the complexity of curricula structure and graduation rates. This
        is validated using a Monte Carlo simulation method. The results
        also provide useful insights to purse more complex implementations
        for prospective future work.`
    },
    {
        id: 1,
        title: "Measuring University Performance: Trends in Higher Education Research and Development Expenditures",
        date: "Feburary 11, 2022, 2:00PM MST (Arizona), 4:00PM EDT",
        speaker:`Craig W. Abbey,
        Research Director, The Center for Measuring University Performance, and
        Vice Provost for Institutional Analysis and Planning,
        University at Buffalo`,
        video:"https://www.youtube.com/watch?v=jh0DvDM7oH4",
        abstract: `Since 2000, The Center for Measuring University Performance (MUP) has focused on the competitive national context for major research universities.  Tracking key metrics that define and measure success drives institutions towards higher performance.  Among the nine key metrics that MUP cleans and tracks data from is NSF Higher Education Research and Development (HERD) survey.  Though focus naturally falls to rankings and a particular institution’s ranking, there is much more the HERD data tells us about research expenditure patterns in the US.  This talk will focus on recent trends in R&D expenditures in higher education, how institutional focus impacts rankings, that a few institutions dominate the higher education R&D market and that most of the significant movement occurs among lower ranked institutions.  The institutions that dominate have greater resources to outcompete others for faculty and students.`
    },
    {
        id: 2,
        title: "Bridging Faculty and Student Cultures: Culturally Responsive Support for STEM Students Transferring Between Two- and Four-Year Hispanic Serving Institutions ",
        date: "January 21, 2022, 2:00PM MST (Arizona), 4:00PM EDT",
        speaker: `Regina Deil-Amen . Ph.D.,
        Director, Center for the Study of Higher Education,
        University of Arizona`,
        video:"https://www.youtube.com/watch?v=bc5veE5aVFY",
        abstract: `This presentation focuses on the activities of an NSF-funded project for an S-STEM (Scholarships in STEM) grant entitled, “Bridging Faculty and Student Cultures: Culturally Responsive Support for STEM Students Transferring Between Two- and Four-Year Hispanic Serving Institutions.” The project, which begins during a student’s last year in community college, aims to create an inclusive and culturally-responsive STEM community that bridges the STEM ecosystems between Pima Community College and University of Arizona and centers faculty and peer mentoring in that process. The project’s various supports, along with the scholarships, are intended to increase STEM identity and sense of belonging, and thereby improve success outcomes (transfer rates, GPA, retention/degree attainment in STEM majors) for Pell-eligible Pima Community College transfer students aspiring to transfer into and complete UArizona STEM majors and pursue STEM careers. An explanation of the project and the challenges that have emerged over the past two years for students regarding their navigation of the transfer process will be highlighted and discussed. `
    },
    {
        id: 3,
        title: "Freshman Interest Group programs at the University of Washington: An overview and recent outcomes",
        date: "December 3, 2021, 2:00PM MST (Arizona), 4:00PM EDT",
        speaker: ` Mani Soma, PhD,
        Professor Emeritus, Electrical and Computer Engineering
        University of Washington, Seattle`,
        video:"https://arizona.zoom.us/j/5206268505",
        abstract: `This presentation reviews the main principles and current implementation of the Freshman Interest Programs (FIGs) at the University of Washington, focusing on Engineering FIGs. Recent outcome data shows very good recruiting and retention of engineering students, especially women and minority. The presentation will discuss FIG impact on the broader undergraduate research programs and will be followed by a Question & Answer session.`
    },
    {
        id: 4,
        title: "The institutionalization of disparities in science",
        date: "October 29, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Cassidy Sugimoto, PhD, Professor and Tom and Marie Patton School Chair in the School of Public Policy Georgia Institute of Technology",
        video:"https://www.youtube.com/watch?v=WCOx66_p4qw&ab_channel=HigherEducationAnalytics",
        abstract: `Despite progress, racial and gender disparities in science persist. Women and scholars of color remain underrepresented in the scientific workforce and under rewarded for their contributions. This talk will examine multiple layers of disparities in science, triangulating data from bibliometric data and social surveys to provide a broader perspective on intersectional disparities in scientific communication. Science of science provides a novel lens to evaluate these issues, drawing upon theories from sociology of science and utilizing new developments in scientometrics. The work will examine the contributions to scientific articles, disparities in productivity, and the impact of scientific work. Factors from grant funding to parenting will be examined as well as the ways in which the pandemic has amplified these disparities. The talk will close on a discussion of the science policy implications of this evidence and what institutions can do to improve equity and justice in higher education.`
    },
    {
        id: 5,
        title: "The Gateway Course Completion Line – A Discussion of Findings and Possible Next Steps Based on the Research Presented in Talking About Leaving Revisited and The Transfer Experience ",
        date: "October 22, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: `Andrew K. Koch, PhD,
        President and Chief Executive Officer,
        John N. Gardner Institute for Excellence in Undergraduate Education 
        Brent Drake, PhD
        Vice Provost for Decision Support,
        University of Nevada, Las Vegas`,
        video:"https://www.youtube.com/watch?v=iiSCvBvLvvc ",
        abstract: "The presenters will share summaries of their descriptive analytics-based research studies published in Talking about Leaving Revisited: Persistence, Relocation, and Loss in Undergraduate STEM Education(Seymour , Hunter, Thiry, Weston, Harper, Holland, Koch, & Drake, 2019) and The Transfer Experience: A Handbook for Creating a More Equitable and Successful Postsecondary System(Gardner, Rosenberg, & Koch, 2020).  Specifically, the presentation will focus on inequitable outcomes in gateway courses across a wide sample of postsecondary institutions. Following the research summary, the presenters will answer questions as well as engage audience members in a discussion about possible next steps for their research on exposing and mitigating unjust design and outcomes in gateway courses and the broader curriculum of which the courses are a part. "
    },
    {
        id: 6,
        title: "Introduction to a New Digital Credential Infrastructure for Today’s Learner",
        date: "September 10, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Matt Lisle, Georgia Institute of Technology",
        video:"https://www.youtube.com/watch?v=4jdov2vb3YM&ab_channel=HigherEducationAnalytics",
        abstract: "Technology has the power to act as a guide for our unique paths and passions. Yet institutions are still issuing and managing credentials in a way that doesn’t serve modern learners. The Digital Credentials Consortium was founded by 12 universities to bridge the gap between traditional academic credentials and the future of digital credentials. Matt will discuss efforts to build a new digital credential infrastructure for today’s learner. "
    },
    {
        id: 7,
        title: "Global Research Topics Network",
        date: "August 27, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Iqbal Hossain, University of Arizona",
        video:"https://www.youtube.com/watch?v=-StgAiUVOkU&ab_channel=HigherEducationAnalytics",
        abstract: "Global research topics network consists of research topics (nodes) and connections of the topics (edges). We discover a node-edge-weighted research topics network by mining millions of google scholar academic profiles. The Global Research Activity Map (GRAM) is an interactive web-based system for visualizing and analyzing worldwide scholarship activity as represented by the research topics. The GRAM system supports map-based interactive features, including semantic zooming, panning, and searching. Evaluation of the GRAM system, with the help of university research management stakeholders, reveals interesting patterns in research investment and output for universities across the world (USA, Europe, Asia) and different types of universities. Overall, GRAM can be a useful tool to visualize human resource investment and research productivity in comparison to peers at a local, regional, and global scale. Such information is needed by university administrators to identify institutional strengths and weaknesses and to make strategic data-driven decisions."
    },
    {
        id: 8,
        title: "Institutional Knowledge Maps project at the University of Arizona",
        date: "August 20, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Lori Schultz, University of Arizona",
        video:"https://www.youtube.com/watch?v=dvq2KDvEnyw&ab_channel=HigherEducationAnalytics",
        abstract: "The Institutional Knowledge Map (KMAP https://kmap.arizona.edu/) is a software platform for providing succinct and interpretable views of enterprise-wide expertise and knowledge portfolios for any organization. The platform utilizes advanced machine learning (ML) techniques for synthesizing structured and unstructured data such as publications, proposals, bio-sketches, social media and web presence for individuals in an organization, to construct a multi-dimensional institutional collaboration and knowledge graph. The resultant knowledge graph is readily interpretable and lends itself for data exploration with its advanced web-based visualization techniques that transform the graph relationships into geographical constructs (maps), highlighting clusters of novel expertise and collaborative activities that are hard to discover. Using advanced NLP (Natural Language Processing) techniques, it can identify potential collaborators and subject matter experts given text input such as calls for proposals. KMAP can be used to build transdisciplinary teams, identify subject matter experts, and elucidate complex relationships within large, diverse, and geographically distributed organizations such as UArizona."
    },
    {
        id: 9,
        title: "Using Curricular Analytics for Improvement of STEM Transfer Pathways",
        date: "August 13, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "David Smith, New Mexico State University",
        video:"https://www.youtube.com/watch?v=b6QLl9QxQ7g&ab_channel=HigherEducationAnalytics",
        abstract: "Curricular structures play a fundamental role in providing equitable opportunities for underrepresented students. This presentation describes ongoing efforts to apply curricular analytics tools for the improvement of STEM transfer pathways within the five-campus New Mexico State University system. The curricular analysis includes complexity-based measures of degree progress, correlation of complexity and course outcome metrics, and consideration of limited instructional capacities at small, rural community college campuses. The analysis is used to identify (i), potential curricular modifications, and (ii) ways online instruction might optimally bridge between community college and main campus experiences."
    },
    {
        id: 10,
        title: "A Markov Decision Processes Modeling for Curricular Analytics",
        date: "August 6, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Husain Al Yusuf, University of Arizona",
        video:"https://www.youtube.com/watch?v=H5twoaL4pmA&ab_channel=HigherEducationAnalytics ",
        abstract: "The curricula structure and the complexity of their prerequisite dependencies proved to be essential factors that impact student progression and ultimately graduation rates. However, there are no available tools in the literature that quantify the relationship between the complexity of curricula structure and graduation rates. This paper introduces a new method that captures this relationship using Markov Decision Processes (MDP). The non-deterministic nature of students’ progresses along with their evolving states at each semester make MDP a suitable framework for this work. The novelty of the proposed model is mainly characterized by its closed-form solution approach that can be utilized to perform “what-if” analysis upon modifying curricula structure. The results confirm the converse relationship between the complexity of curricula structure and graduation rates. This is validated using a Monte Carlo simulation method. The results also provide useful insights to purse more complex implementations for prospective future work."
    },
    {
        id: 11,
        title: "Learning Outcomes Graph Optimization",
        date: "July 30, 2021, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Yiming Zhang, University of Arizona",
        link: "seminarpage.html",
        video:" https://www.youtube.com/watch?v=24BszQmisto&ab_channel=HigherEducationAnalytics",
        abstract: "In this presentation we cover the motivation, basic concepts, and some recent work related to applying learning outcome graph optimization in the area of curricular analytics. First, we review our previous work in curricular complexity including its definition and a simulation result that relates student performance and curricular complexity. The curricular analytics toolbox will be introduced briefly in order to provide visualizations and to compute metrics that will be used in this talk. Second, we introduce the concept of learning outcome graphs and we consider their relationship to curriculum graphs. We then demonstrate how learning outcomes can be organized into the courses that make up a curriculum, and how this can be done so as to reduce curricular complexity. Third, we present the objective function and multiple constraints in the learning outcome graph optimization problem, and we demonstrate its application on a real ECE curriculum. Finally, we discuss our future plans including obtaining more practical datasets, designing a balanced graph partitioning algorithm, and considering more dimensional information in the optimization."
    },
    {
        id: 12,
        title: "Curricular and Academic Analytics in Electrical Engineering at New Mexico State University",
        date: "Friday, July 23, 2:00PM MST (Arizona), 5:00PM EDT",
        speaker: "Laura Boucheron, New Mexico State University",
        video:" https://www.youtube.com/watch?v=bMq10e8r7p4&ab_channel=HigherEducationAnalytics",
        abstract: " In this talk, we present some recent work combining analysis of curricular structure and student performance in Electrical Engineering at New Mexico State University.  First, we discuss the effect of student DFWs on time to graduation and find that, on average, student graduation is extended by one semester for each DFW grade earned.  Second, we present ongoing work on the correlation of student grades between classes.  We find that grade correlation is compressed to a relatively small range of correlation coefficients and reveal some surprising results for courses that both do and do not share a prerequisite structure.  Third, we present ongoing work on the modeling of our BSEE curriculum at a topic level.  We accumulate references to topics on a course level, resulting in an analysis that reveals how many times course X references any topic (either directly or through a hierarchy of topic relationships) from course Y and again reveal some surprising results for courses that both do and do not share a prerequisite structure. "
    }
];