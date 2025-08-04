const body = document.body;

const page3 = () => {
  const data = [
    {
      img: "./public/sikha.jpg",
      heading: "Faculty Incharge",
      sname: "Ms Shikha",
      position: "Faculty Incharge",
      para: ``,
    },
    {
      img: "./public/richa.jpeg",
      heading: "Faculty Head",
      sname: "Ms Richa",
      position: "Faculty Head",
      para: ``,
    },
    {
      img: "./public/prinka.jpg",
      heading: "Faculty Incharge",
      sname: "Ms Priyanka",
      position: "Faculty Incharge",
      para: ``,
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

    page2imgs.appendChild(div);
  });
};
let page5 = () => {
  const simg = document.querySelector(".simg");
  const data = [
    {
      sname: "shristi",
      instaID:"https://www.instagram.com/_.shrxxti._?igsh=dzlxc3F3ZTVxN2Rw",
      position: " President",
      img: "./public/shristi.jpg",
    },
    {
      sname: "anushka jha",
      instaID:"https://www.instagram.com/anushka_jha._?igsh=MW4zczZha2Nkcno5",
      position: "vice President",
      img: "public/anushka.jpg",
    },
    {
      sname: "yashraj",
      instaID:"https://www.instagram.com/yash_raj0813?igsh=NGF6YWQ0NDNneGN6",
      position: "assistant Secretary",
      img: "public/yashraj.jpg",
    },
    {
      sname: "priyani",
      instaID:"https://www.instagram.com/_.priyaniii._?igsh=MWgya2Vmd3M5bHRncg==",
      position: "Theater",
      img: "public/priyani.jpg",
    },
    {
      sname: "avinash",
      instaID:"https://www.instagram.com/avinasshh_ig?igsh=cGd4MmlpZ2l3b2lp",
      position: "Music",
      img: "public/avi.jpg",
    },
    {
      sname: "aryan",
      instaID:"https://www.instagram.com/_aka.aryan_?igsh=YzR6cHplb25kdjUz",
      position: "Dance",
      img: "public/aryan.jpg",
    },
    {
      sname: "mahek Goinka",
      instaID:"https://www.instagram.com/meeemahekkk?igsh=MXV1NWpveDd0ZXlxNA==",
      position: "Management",
      img: "public/mahek.jpg",
    },
    {
      sname: "nikhil singh bora",
      instaID:"https://www.instagram.com/singh_niikhil?igsh=MXF3dmcxOWRtdHA4eg==",
      position: "Management",
      img: "public/nikhil.jpg",
    },
    {
      sname: "harshit",
      instaID:"https://www.instagram.com/theharshitbhutani?igsh=NjVhdm84endpb21i",
      position: "social media",
      img: "public/harshit.jpg",
    },
    {
      sname: "khushi gupta",
      instaID:"https://www.instagram.com/khushigg15?igsh=ZjRvMjVkYWJpZTRr",
      position: "creative",
      img: "public/khushi.jpg",
    },
  ];
  data.map((res) => {
    const div = document.createElement("div");
    div.setAttribute("class", "spic");

    div.innerHTML = `
          <a href="${res.instaID}"><div class="spicName">${res.sname}</div>
          <div class="spicDis">${res.position}</div>
          <img src="${res.img}" alt="" /></a>
    `;
    simg.appendChild(div);
  });
};
page3();
page5();

