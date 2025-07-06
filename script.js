let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.skills-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content ',{origin:'right'});
ScrollReveal().reveal('.skills h2',{origin:'right'});
ScrollReveal().reveal('.qualifications-section, .timeline, .timeline-content',{origin:'bottom'});

// const typed = new Typed('.multiple-text',{
//     strings:['CSE Student at NMIT ','Frontend developer'],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });

const scriptURL ="https://script.google.com/macros/s/AKfycbx7XFzMniP-VBQTAZpAg_50ACYBygVWQV_xZTXNKR6QOHPxS4NcJJZ0u20nzyBnJ1xi/exec"
const form = document. forms['contact-form' ]

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your message is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))

})




   function showMessage(qualification) {
      const messages = {
        primary: {
          title: "Class 10th Summary : ",
          content: [
            "Subjects studied: Science, Maths, English, Social Studies, Marathi, Hindi.",
            "Scored 93.80%",
            "Winner in public speacking Competition"
          ]
        },
        diploma: {
          title: "Diploma Summary :",
          content: [
            "Subjects studied: Data Structures, DBMS, Networking, Java, Operating Systems.",
            "Scored 83.83%",
            "Participated in Technical Competitions.",
            "Member of the college ACESA club."
          ]
        },
        btech: {
          title: "B.Tech Summary :",
          content: [
            "Subjects studied: Artificial Intelligence, Machine Learning, Cloud Computing, Web Development.",
            "CGPA: 8.5",
            "Participated in several tech fests."
          ]
        }
      };

      const messageData = messages[qualification];
      document.getElementById("message-title").innerText = messageData.title;

      const messageContent = document.getElementById("message-content");
      messageContent.innerHTML = ""; // Clear previous content
      messageData.content.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        messageContent.appendChild(listItem);
      });

      document.getElementById("message-box").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }

    function closeMessage() {
      document.getElementById("message-box").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }