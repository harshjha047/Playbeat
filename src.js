const body=document.body


const page3 =()=>{
const data = [
    {
        img:"./practice image/img 10.jpeg",
        heading:"heading",
        sname:"Harsh Jha",
        position:"Tech",
        para:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non error eius alias, quod dicta tenetur accusamus maiores est .`,
    },
    {
        img:"./practice image/img 10.jpeg",
        heading:"heading",
        sname:"Harsh Jha",
        position:"Tech",
        para:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non error eius alias, quod dicta tenetur accusamus maiores est .`,
    },
    {
        img:"./practice image/img 10.jpeg",
        heading:"heading",
        sname:"Harsh Jha",
        position:"Tech",
        para:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non error eius alias, quod dicta tenetur accusamus maiores est .`,
    },
]
const page2imgs = document.querySelector(".page2imgs")

data.map(i => {
    const div = document.createElement("div")
    div.setAttribute("class","page2img1")
    div.innerHTML=`
          <img src="${i.img}" alt="" />
          <div class="page2img1Name">${i.heading}</div>
          <div class="page2imgtxt">
            <div class="page2imgtxtabout">
              <div class="page2imgtxtaboutName">Name: ${i.sname}</div>
              <div class="page2imgtxtaboutQuest">Quest: ${i.position}</div>
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
    `
    console.log(page2imgs)
    console.log(div)

    page2imgs.appendChild(div)
})
}
let page5=()=>{
  const simg = document.querySelector(".simg")
  const data = [
    {
      sname:"harsh jha",
      position:"hehehehe",
      img:"practice image/img 8.jpeg"
    },
  ]
  data.map((res)=>{
    const div = document.createElement("div")
    div.setAttribute("class","spic")

    div.innerHTML=`
          <div class="spicName">${res.sname}</div>
          <div class="spicDis">${res.position}</div>
          <img src="${res.img}" alt="" />
    `
  simg.appendChild(div)

    
  })

}
page3()
page5()
