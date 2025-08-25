


const page3 = () => {
  const data = [
    {
      img: "./public/sikha.jpg",
      heading: "Faculty Incharge",
      sname: "Ms Shikha",
      para: ``,
    },
    // {
    //   img: "",
    //   heading: "Faculty Incharge",
    //   sname: "Ms Richa",
    //   para: ``,
    // },
    {
      img: "./public/prinka.jpg",
      heading: "Faculty Incharge",
      sname: "Ms Priyanka",
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
              <div class="page2imgtxtaboutQuest">${i.heading}</div>
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
    { class:"2025", sname: "shristi", instaID:"https://www.instagram.com/_.shrxxti._?igsh=dzlxc3F3ZTVxN2Rw", position: " President", img: "./public/shristi.jpg",},
    { class:"2025", sname: "anushka jha",instaID:"https://www.instagram.com/anushka_jha._?igsh=MW4zczZha2Nkcno5",position: "vice President",img: "public/anushka.jpg",},
    { class:"2025", sname: "yashraj",instaID:"https://www.instagram.com/yash_raj0813?igsh=NGF6YWQ0NDNneGN6",position: "assistant Secretary",img: "public/yashraj.jpg",},
    { class:"2025", sname: "priyani",instaID:"https://www.instagram.com/_.priyaniii._?igsh=MWgya2Vmd3M5bHRncg==",position: "Theatre",img: "public/priyani.jpg",},
    { class:"2025", sname: "avinash",instaID:"https://www.instagram.com/avinasshh_ig?igsh=cGd4MmlpZ2l3b2lp",position: "Music",img: "public/avi.jpg",},
    { class:"2025", sname: "aryan",instaID:"https://www.instagram.com/_aka.aryan_?igsh=YzR6cHplb25kdjUz",position: "Dance",img: "public/aryan.jpg",},
    { class:"2025", sname: "Mahek goenka",instaID:"https://www.instagram.com/meeemahekkk?igsh=MXV1NWpveDd0ZXlxNA==",position: "Management",img: "public/mahek.jpg",},
    { class:"2025", sname: "nikhil singh bora",instaID:"https://www.instagram.com/singh_niikhil?igsh=MXF3dmcxOWRtdHA4eg==",position: "Management",img: "public/nikhil.jpg",},
    { class:"2025", sname: "harshit",instaID:"https://www.instagram.com/theharshitbhutani?igsh=NjVhdm84endpb21i",position: "social media",img: "public/harshit.jpg",},
    { class:"2025", sname: "khushi gupta",instaID:"https://www.instagram.com/khushigg15?igsh=ZjRvMjVkYWJpZTRr",position: "creative",img: "public/khushi.jpg",},

    { class:"2024", sname: "Srijay",position: "president",img: "public/srijay.jpg",instaID: "https://www.instagram.com/srijaychakraborty?utm_source=ig_web_button_share_sheet&igsh=MXBiY3QwNm1qMGFhYw==",},
    { class:"2024", sname: "harshil",position: "vice president",img: "public/harshil.jpg",instaID: "https://www.instagram.com/tyagi_harshil_18?utm_source=ig_web_button_share_sheet&igsh=dmh1eWF3YmQ2ZDIx",},
    { class:"2024", sname: "Aarav pahuja",position: "General secretary",img: "public/aarav.jpg",instaID: "https://www.instagram.com/_.aaravvvv/?utm_source=ig_web_button_share_sheet",},
    { class:"2024", sname: "Nishant pratap singh",position: "General secretary",img: "public/Nishant.jpg",instaID: "https://www.instagram.com/nishant_pratap_19?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",},
    { class:"2024", sname: "shristi", instaID:"https://www.instagram.com/_.shrxxti._?igsh=dzlxc3F3ZTVxN2Rw", position: " assistant Secretary", img: "./public/shristi.jpg",},
    { class:"2024", sname: "Nikhil",position: "Dance Head",img: "public/Nikhil_Dance.jpg",instaID: "https://www.instagram.com/ayoitsnikhill?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",},
    { class:"2024", sname: "Nishant singh",position: "Theatre Head",img: "public/Nishant_theatre.jpg",instaID: "https://www.instagram.com/itsnishant_simple?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",},
    { class:"2024", sname: "Aaryavart",position: "Music head",img: "public/arya.jpg",instaID: "",},
    { class:"2024", sname: "Mahek goenka",instaID:"https://www.instagram.com/meeemahekkk?igsh=MXV1NWpveDd0ZXlxNA==",position: "Management",img: "public/mahek.jpg",},
    { class:"2024", sname: "Mohit kumar yadav",position: "Management Head",img: "public/mohit.jpg",instaID: "https://www.instagram.com/mohit.k.yadav?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",},
    { class:"2024", sname: "Harsh jha",position: "Tech Head",img: "public/harsh.jpg",instaID: "https://www.instagram.com/harsh_jha0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",},
    { class:"2024", sname: "Lakshay",position: "Social media head",img: "public/lax.jpg",instaID: "",},
    { class:"2024", sname: "khushi gupta",instaID:"https://www.instagram.com/khushigg15?igsh=ZjRvMjVkYWJpZTRr",position: "creative",img: "public/khushi.jpg",},
    { class:"2024", sname: "harshit",instaID:"https://www.instagram.com/theharshitbhutani?igsh=NjVhdm84endpb21i",position: "social media",img: "public/harshit.jpg",},

    { class:"2023", sname: "Priyanshu singh ",position: "president",img: "",instaID: "https://www.instagram.com/_priynshusing?utm_source=ig_web_button_share_sheet&igsh=MTR3NjN5YTl1N3cwag==",},
    { class:"2023", sname: "Hardik sharma",position: "vice president",img: "",instaID: "https://www.instagram.com/_._hardikkkkk/?utm_source=ig_web_button_share_sheet",},
    { class:"2023", sname: "Srijay",position: "General secretary",img: "public/srijay.jpg",instaID: "https://www.instagram.com/srijaychakraborty?utm_source=ig_web_button_share_sheet&igsh=MXBiY3QwNm1qMGFhYw==",},
    { class:"2023", sname: "Khwaish gautam",position: "Management Head",img: "",instaID: "https://www.instagram.com/khwaishgautam/?utm_source=ig_web_button_share_sheet",},
    { class:"2023", sname: "devraj tanwar",position: "Management Head",img: "",instaID: "https://www.instagram.com/dev.raj.tanwar/?utm_source=ig_web_button_share_sheet",},
    { class:"2023", sname: "harshil",position: "Management Head",img: "public/harshil.jpg",instaID: "https://www.instagram.com/tyagi_harshil_18?utm_source=ig_web_button_share_sheet&igsh=dmh1eWF3YmQ2ZDIx",},
    { class:"2023", sname: "Kanika rathee",position: "Dance Head",img: "",instaID: "https://www.instagram.com/kanikaxooo/?utm_source=ig_web_button_share_sheet",},
    { class:"2023", sname: "Aaryavart",position: "Music head",img: "public/arya.jpg",instaID: "",},
    { class:"2023", sname: "Nishant singh",position: "Theatre Head",img: "public/Nishant_theatre.jpg",instaID: "https://www.instagram.com/itsnishant_simple?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",},
    { class:"2023", sname: "Shikhar ",instaID:"https://www.instagram.com/yadav_60fps?utm_source=ig_web_button_share_sheet&igsh=MWJsNWM3NGpzdjNzdA==",position: "social media",img: "",},
    { class:"2023", sname: "Lakshay",instaID:"https://www.instagram.com/lakshayyyyy.rawat?utm_source=ig_web_button_share_sheet&igsh=MTlianhxaThvNW5uMA==",position: "social media",img: "",},
    { class:"2023", sname: "Danish",position: "Tech Head",img: "",instaID: "https://www.instagram.com/danyyyyhere_____?utm_source=ig_web_button_share_sheet&igsh=ZXRvZnZqOXRva2xp",},
    { class:"2023", sname: "Aman",position: "Tech Head",img: "",instaID: "",},
    { class:"2023", sname: "Sameer ",position: "Activity Head",img: "",instaID: "https://www.instagram.com/sameer_0411?utm_source=ig_web_button_share_sheet&igsh=MXAxYjI5YWhoYjEybg==",},
    { class:"2023", sname: "Gajenra ",position: "Activity Head",img: "",instaID: "https://www.instagram.com/g__2601/?utm_source=ig_web_button_share_sheet",},
  ];

 const s2025=data.filter((e)=>"2025" == e.class)
 const s2024=data.filter((e)=>"2024" == e.class)
 const s2023=data.filter((e)=>"2023" == e.class)

 let useData = s2025

 document.querySelector(".s2024").addEventListener("click", (e) => {
  useData= s2024;
  simg.innerHTML = "";
  useData.map((res) => {
    const div = document.createElement("div");
    div.setAttribute("class", "spic");

    div.innerHTML = `
          <a href="${res.instaID}"><div class="spicName">${res.sname}</div>
          <div class="spicDis">${res.position}</div>
          <img src="${res.img}" alt="" /></a>
    `;
    simg.appendChild(div);
  });
 })
document.querySelector(".s2025").addEventListener("click", (e) => {
  useData= s2025;
  simg.innerHTML = "";
  useData.map((res) => {
    const div = document.createElement("div");
    div.setAttribute("class", "spic");

    div.innerHTML = `
          <a href="${res.instaID}"><div class="spicName">${res.sname}</div>
          <div class="spicDis">${res.position}</div>
          <img src="${res.img}" alt="" /></a>
    `;
    simg.appendChild(div);
  });
 })
 document.querySelector(".s2023").addEventListener("click", (e) => {
  useData= s2023;
  simg.innerHTML = "";
  useData.map((res) => {
    const div = document.createElement("div");
    div.setAttribute("class", "spic");

    div.innerHTML = `
          <a href="${res.instaID}"><div class="spicName">${res.sname}</div>
          <div class="spicDis">${res.position}</div>
          <img src="${res.img}" alt="" /></a>
    `;
    simg.appendChild(div);
  });
 })
 useData.map((res) => {
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

