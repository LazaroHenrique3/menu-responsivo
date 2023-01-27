const header = document.getElementById('header')
const navigationHeader = document.getElementById('navigation_header')
const content = document.getElementById('content')
let showSideBar = false

document.getElementById('btn-responsive').addEventListener('click', toggleSideBar)
document.getElementById('btn-responsive-close').addEventListener('click', toggleSideBar)

content.addEventListener('click', closeSidebar)

function toggleSideBar(){
    showSideBar = !showSideBar
    if(showSideBar){
        navigationHeader.style.marginLeft = '-10vw'
        navigationHeader.style.animationName = 'showSideBar'
        content.style.filter = 'blur(2px)'
    }else{
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = ''
        content.style.filter = ''
    }
}

function closeSidebar(){
    if(showSideBar){
        toggleSideBar()
    }
}

window.addEventListener('resize', ev => {
    if(window.innerWidth > 768 && showSideBar){
        toggleSideBar()
    }
})