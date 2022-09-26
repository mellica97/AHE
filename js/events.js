const events = [
    {
        title: "Event1",
        abstract: "",
        date: "",
        link: "#",
        speaker: "",
        video:""
    },
    {
        title: "Event2",
        abstract: "",
        date: "",
        link: "#",
        speaker: "",
        video:""
    },
    {
        title: "Event3",
        abstract: "",
        date: "",
        link: "#",
        speaker: "",
        video:""
    }
];
let eventsHTML = "";
  for ({ title, link} of events) {
    eventsHTML += `<li role="presentation"><a href="${link}">${title}</a></li>`;}
document.getElementById("events").innerHTML = eventsHTML;
