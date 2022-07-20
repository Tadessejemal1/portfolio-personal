const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));  
const popupModal = document.querySelector(".modal-container");
const projectSee = document.querySelector(".project-see");
const btnX = document.querySelector(".btn-x")

projectSee.addEventListener("click",() => {
   popupModal.style.display="block";
})

btnX.addEventListener("click", () => {
  popupModal.style.display = "none";
  
})


/* Project Modal Builder */
// Project list
const projects = [{
  title: 'Multi Post Stories',
  technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
  featuredImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
{
  title: 'Project 2',
  technologies: ['HTML', 'CSS', 'Javascript'],
  featuredImage: './media/placeholder2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
{
  title: 'Another Project',
  technologies: ['Java', 'SpringBoot'],
  featuredImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
{
  title: 'Even More Projects',
  technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
  featuredImage: './media/placeholder2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
{
  title: 'Project 3',
  technologies: ['Python', 'SQL'],
  featuredImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
{
  title: 'Project X',
  technologies: ['Azucar', 'Flores', 'Muchos Colores'],
  featuredImage: './media/placeholder2.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
{
  title: 'I\'m tired',
  technologies: ['Blood', 'Sweat', 'Tears'],
  featuredImage: './media/placeholder.png',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  livelink: 'https://tadessejemal1.github.io/portfolio-mobile-work-and-about/',
  sourcelink: 'https://github.com/Tadessejemal1/portfolio-mobile-work-and-about',
},
];
