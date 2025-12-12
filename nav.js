const body = document.body;

const mobNav=()=>{
const mobileNav = document.createElement("div");
mobileNav.setAttribute("class", "mobileNav");
const bubbleNav = document.createElement("div");
bubbleNav.setAttribute("class", "bubbleNav");

let navToggle = true;

bubbleNav.innerHTML = `<svg viewBox="0 0 640 640"><path d="M416 160C416 147.1 408.2 135.4 396.2 130.4C384.2 125.4 370.5 128.2 361.3 137.3L201.3 297.3C188.8 309.8 188.8 330.1 201.3 342.6L361.3 502.6C370.5 511.8 384.2 514.5 396.2 509.5C408.2 504.5 416 492.9 416 480L416 160z"/></svg>`;

mobileNav.innerHTML = `
        <div class="mobileNavCover"> 
        <div class="home"><a href="https://spontaneous-parfait-fee957.netlify.app/">Home</a></div>
        <div class="former"><a href="./formerMembers.html">Former member</a></div>
        <div class="join"><a href="https://forms.gle/JncscstpErMtaQBs8">Join Us</a></div>
        <div class="devs"><a href="">Developers</a></div>
        </div>
`;

bubbleNav.addEventListener("click", () => {
  console.log(navToggle ? "yes" : "no");
  if (navToggle) {
    bubbleNav.innerHTML = `<svg viewBox="0 0 640 640"><path d="M224.5 160C224.5 147.1 232.3 135.4 244.3 130.4C256.3 125.4 270 128.2 279.1 137.4L439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C269.9 511.9 256.2 514.6 244.2 509.6C232.2 504.6 224.5 492.9 224.5 480L224.5 160z"/></svg>`;
    mobileNav.style.cssText += `transform: translateX( 0%);
`;
  } else {
    mobileNav.style.cssText += `transform: translateX(+100%); `;

    bubbleNav.innerHTML = `<svg viewBox="0 0 640 640"><path d="M416 160C416 147.1 408.2 135.4 396.2 130.4C384.2 125.4 370.5 128.2 361.3 137.3L201.3 297.3C188.8 309.8 188.8 330.1 201.3 342.6L361.3 502.6C370.5 511.8 384.2 514.5 396.2 509.5C408.2 504.5 416 492.9 416 480L416 160z"/></svg>`;
  }
  return (navToggle = !navToggle);
});

body.append(mobileNav);
body.append(bubbleNav);
}
mobNav()


