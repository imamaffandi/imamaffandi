<h1 align="center">Hi 👋, I'm Imam Affandi</h1>
<h3 align="center">A passionate frontend developer from Indonesia</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=imamafffandi&label=Profile%20views&color=0e75b6&style=flat" alt="imamafffandi" /> </p>

- 🌱 I’m currently learning **Next.js, React.js**

- 👨‍💻 You can see my project [here](https://imamaffandi.netlify.app/)

- 📫 How to reach me **imamaffandi715@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://twitter.com/imamaffandi99" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="imamaffandi99" height="30" width="40" /></a>
<a href="https://instagram.com/imamaffandi01" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="imamaffandi01" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> 
     <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
       <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
     <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>
       <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a>
     <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> 
   
   <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
     <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
      <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
    <a href="https://www.blender.org/" target="_blank" rel="noreferrer"> <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width="40" height="40"/> </a> 
 <a href="https://threejs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/512px-Three.js_Icon.svg.png?20211115112438" alt="kubernetes" width="40" height="40"/> </a>  </p>
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
    <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
     <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a>
 <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a>
      <a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/> </a>
       <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 

## My First Step to build website

1.  Make a folder
2.  open the terminal and install Vite  
    `npm create vite@latest ./ -- --template react`
    `npm install`

3.  Install Dependencies
    
```
   
    npm install --legacy-peer-deps
     (I usually use 👇)
    @react-three/fiber
    @react-three/drei
    react-tilt
    framer-motion
    react-router-dom
    three
    react-scroll
```
4.  Install tailwind  
    ` npm install -D tailwindcss postcss autoprefixer`
    `npx tailwindcss init -p`

5. Setup tailwind

```
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx}"],
 mode: "jit",
 theme: {
   extend: {
     colors: {
       darkest: "#0D1826",
       dark: "#475363",
       mid: "#CBD5E1",
       light: "#E9EFF5",
       lightest: "#FFFFFF",
       brand: "#7E8A9B",
     },
    
   },
 },
 plugins: [],
};
```

6. Setup tailwind on css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
