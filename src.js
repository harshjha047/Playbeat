const body = document.body;

const page3 = () => {
  const data = [
    {
      img: "./public/sikha.jpg",
      heading: "Feculty Incharge",
      sname: "Ms Sikha",
      position: "Feculty Incharge",
      para: ``,
    },
    {
      img: "./public/richa.jpeg",
      heading: "Feculty Head",
      sname: "Ms Richa",
      position: "Feculty Head",
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non error eius alias, quod dicta tenetur accusamus maiores est .`,
    },
    {
      img: "./public/prinka.jpg",
      heading: "",
      sname: "Ms Prinka",
      position: "Feculty Incharge",
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non error eius alias, quod dicta tenetur accusamus maiores est .`,
    },
  ];
  const page2imgs = document.querySelector(".page2imgs");

  data.map((i) => {
    const div = document.createElement("div");
    div.setAttribute("class", "page2img1");
    div.innerHTML = `
          <img src="${i.img}" alt="" />
          <div class="page2img1Name">${i.heading}</div>
          <div class="page2imgtxt">
            <div class="page2imgtxtabout">
              <div class="page2imgtxtaboutName">Name: ${i.sname}</div>
              <div class="page2imgtxtaboutQuest">${i.position}</div>
            </div>
            <div class="page2img1Disc">
              <div class="page2img1Disctxt">
              ${i.para}
              </div>
              <div class="page2img1Discicon">
                <div class="disIcon"></div>
              </div>
            </div>
          </div>
    `;
    console.log(page2imgs);
    console.log(div);

    page2imgs.appendChild(div);
  });
};
let page5 = () => {
  const simg = document.querySelector(".simg");
  const data = [
    {
      sname: "shristi",
      position: " President",
      img: "./public/shristi.jpg",
    },
    {
      sname: "anushka jha",
      position: "vice President",
      img: "public/anushka.jpg",
    },
    {
      sname: "yashraj",
      position: "assistant Secretary",
      img: "public/yashraj.jpg",
    },
    {
      sname: "priyani",
      position: "Theater",
      img: "public/priyani.jpg",
    },
    {
      sname: "avinash",
      position: "Music",
      img: "public/avi.jpg",
    },
    {
      sname: "aryan",
      position: "Dance",
      img: "public/aryan.jpg",
    },
    {
      sname: "mahek Goinka",
      position: "Management",
      img: "public/mahek.jpg",
    },
    {
      sname: "nikhil singh bora",
      position: "Management",
      img: "public/nikhil.jpg",
    },
    {
      sname: "harshit",
      position: "social media",
      img: "public/harshit.jpg",
    },
    {
      sname: "khushi gupta",
      position: "creative",
      img: "public/khushi.jpg",
    },
  ];
  data.map((res) => {
    const div = document.createElement("div");
    div.setAttribute("class", "spic");

    div.innerHTML = `
          <div class="spicName">${res.sname}</div>
          <div class="spicDis">${res.position}</div>
          <img src="${res.img}" alt="" />
    `;
    simg.appendChild(div);
  });
};
page3();
page5();

