var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

const templateCardHome = `<div class="overflow-hidden">
<img
  src="./img/azmii.jpeg"
  class="rounded-xl w-[400px] aspect-square bg-cover"
  alt="azmi"
/>
</div><div class="flex flex-col gap-5 text-white text-justify font-bold">
<h1 class="text-5xl">Hey, I'm Azmi</h1>
<p class="text-lg font-medium text-gray-400">
I'm a reactjs front-end web developer who creates open source projects and writes about life, code, design, and more. Nice to meet you..
</p>
<div class="flex gap-5 ">
  <a href="https://www.instagram.com/mkhairilazmii/"
    ><img
      class="text-gray-400 hover:text-white transition duration-150 ease-in-out"
      src="./icons/ig.svg"
      alt=""
  /></a>
  <a href="https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr"
    ><img
      class="text-gray-400 hover:text-white transition duration-150 ease-in-out"
      src="./icons/fb.svg"
      alt=""
  /></a>
  <a href="https://www.linkedin.com/in/muh-haeril-azmi-a966622a7/"
    ><img
      class="text-gray-400 hover:text-white transition duration-150 ease-in-out"
      src="./icons/linkedin.svg"
      alt=""
  /></a>
  <a href="https://github.com/izmahaerill"
    ><img
      class="text-gray-400 hover:text-white transition duration-150 ease-in-out"
      src="./icons/github.svg"
      alt=""
  /></a>
</div>
</div>`;

const templateCardAbout = `<div class="overflow-hidden">
<img
  src="./img/azmii.jpeg"
  class="rounded-xl w-[400px] aspect-square bg-cover"
  alt="azmi"
/>
</div><div class="flex flex-col gap-5 text-white text-justify font-bold">
<h1 class="text-5xl">About Mee..</h1>
<p class="text-lg font-medium text-gray-400 ">
Hi, I'm Azmi. I have been a software developer since 2021, and I still do
until now.
</p>
<p class="text-lg font-medium text-gray-400 ">
  This is my spot on the web for writing, projects, tutorials, art, and
  anything else I want to put out there. Check out the blog, or take a
</p>
</div>`;

const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const section = document.querySelector("#container");
section.innerHTML = templateCardHome;
homeBtn.addEventListener("click", () => {
  section.innerHTML = templateCardHome;
});
aboutBtn.addEventListener("click", () => {
  section.innerHTML = templateCardAbout;
});
