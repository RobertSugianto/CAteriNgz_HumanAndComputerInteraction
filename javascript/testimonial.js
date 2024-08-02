const openSidebar = document.getElementById('openSideBar');
const closeSidebar = document.getElementById('closeSidebar');

openSidebar.addEventListener('click', () => {
    const sidebarNav = document.querySelectorAll('.sidebarNav');
    if(document.body.clientWidth > 425){
        document.querySelector('.sidebar').style.width = '250px';
    }
    else document.querySelector('.sidebar').style.width = '100vw';
    document.querySelector('.sidebar').children[0].style.width = '100%';

    sidebarNav[0].children[0].style.height = '45px';
    sidebarNav[0].children[0].style.margin = '0 30px';
    sidebarNav.forEach((sidebar) => {
        sidebar.style.padding = '10px';
        sidebar.children[0].style.fontSize = '30px';
        sidebar.children[0].style.padding = '10px';
    });
});

closeSidebar.addEventListener('click', () => {
    const sidebarNav = document.querySelectorAll('.sidebarNav');
    document.querySelector('.sidebar').style.width = 0;
    document.querySelector('.sidebar').children[0].style.width = 0;

    sidebarNav[0].children[0].style.height = 0;
    sidebarNav[0].children[0].style.margin = 0;
    sidebarNav.forEach((sidebar) => {
        sidebar.style.padding = 0;
        sidebar.children[0].style.fontSize = 0;
        sidebar.children[0].style.padding = 0;
    });
});

window.addEventListener('resize', () => {
    if(document.body.clientWidth > 768){
        const sidebarNav = document.querySelectorAll('.sidebarNav');
        document.querySelector('.sidebar').style.width = 0;
        document.querySelector('.sidebar').children[0].style.width = 0;

        sidebarNav[0].children[0].style.height = 0;
        sidebarNav[0].children[0].style.margin = 0;
        sidebarNav.forEach((sidebar) => {
            sidebar.style.padding = 0;
            sidebar.children[0].style.fontSize = 0;
            sidebar.children[0].style.padding = 0;
        });
    }
});