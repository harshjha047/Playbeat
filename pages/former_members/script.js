const main = document.querySelector("main");
const section = document.createElement("section");
section.setAttribute("class", "sectionOne");

main.appendChild(section);

data2024 = [
  {
    name: "Srijay",
    session: "2023-2024",
    position: "president",
    img: "../../public/srijay.jpg",
    link: "",
    spc: "",
  },
  {
    name: "harshil",
    session: "2023-2024",
    position: "vice president",
    img: "../../public/harshil.jpg",
    link: "",
    spc: "",
  },
    {
    name: "Nishant pratap singh",
    session: "2023-2025",
    position: "General secretary",
    img: "../../public/Nishant.jpg",
    link: "",
    spc: "",
  },
  {
    name: "Nikhil",
    session: "2023-2025",
    position: "Dance Head",
    img: "../../public/Nikhil_Dance.jpg",
    link: "",
    spc: "",
  },
  {
    name: "Nishant singh",
    session: "2023-2025",
    position: "Theatre Head",
    img: "../../public/Nishant_theatre.jpg",
    link: "",
    spc: "",
  },
  {
    name: "Mohit kumar yadav",
    session: "2023-2025",
    position: "Management Head",
    img: "../../public/mohit.jpg",
    link: "",
    spc: "",
  },
    {
    name: "Harsh jha",
    session: "2024-2025",
    position: "Tech Head",
    img: "../../public/harsh.jpg",
    link: "",
    spc: "",
  },

  // {
  //   name: "Aarav pahuja",
  //   session: "2023-2024",
  //   position: "General secretary",
  //   img: "",
  //   link: "",
  //   spc: "",
  // },
  // {
  //   name: "Lakshay",
  //   session: "2023-2024",
  //   position: "Social media head",
  //   img: "",
  //   link: "",
  //   spc: "",
  // },
  // {
  //   name: "Aaryavart",
  //   session: "2023-2024",
  //   position: "Music head",
  //   img: "",
  //   link: "",
  //   spc: "",
  // },
];

data2024.map((res) => {
  const artical = document.createElement("article");
  artical.setAttribute("class", "framePart");
  artical.innerHTML = `
     <a class="link" href="">
                    <div class="position">${res.position}</div>
                    <div class="dis">
                        <h1 class="name">${res.name}</h1> <br/>
                        <p class="session">${res.session}</p>
                    </div>
            </a>
  `;
  artical.style.cssText += `
    background:url(${res.img}) no-repeat center;
    background-size:cover;
  `;
  section.appendChild(artical);
});
