let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkMode','active')
}

const disableDarkMode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkMode','null')
}

if(darkmode === "active") enableDarkMode()


themeSwitch.addEventListener("click",() =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})