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

// Script for filter
const filterButton = document.querySelector('.filter');
let isFilterOn = false;

show('All');

filterButton.addEventListener('click', () => {
    if(isFilterOn){
        isFilterOn = false;
        document.querySelector('.filterDrop').style.display = 'none';
    }
    else{
        isFilterOn = true;
        document.querySelector('.filterDrop').style.display = 'block';
    }
});

function show(char){
    if(char === "All"){
        document.querySelectorAll('.Indonesian').forEach((elem) => {
            elem.style.display = 'flex';
        });
        document.querySelectorAll('.Chinese').forEach((elem) => {
            elem.style.display = 'flex';
        });
        document.querySelectorAll('.Western').forEach((elem) => {
            elem.style.display = 'flex';
        });
        document.querySelectorAll('.Eastern').forEach((elem) => {
            elem.style.display = 'flex';
        });
    }
    else if(char === "Indonesian"){
        document.querySelectorAll('.Indonesian').forEach((elem) => {
            elem.style.display = 'flex';
        });
        document.querySelectorAll('.Chinese').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Western').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Eastern').forEach((elem) => {
            elem.style.display = 'none';
        });
    }
    else if(char === "Chinese"){
        document.querySelectorAll('.Indonesian').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Chinese').forEach((elem) => {
            elem.style.display = 'flex';
        });
        document.querySelectorAll('.Western').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Eastern').forEach((elem) => {
            elem.style.display = 'none';
        });
    }
    else if(char === "Western"){
        document.querySelectorAll('.Indonesian').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Chinese').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Western').forEach((elem) => {
            elem.style.display = 'flex';
        });
        document.querySelectorAll('.Eastern').forEach((elem) => {
            elem.style.display = 'none';
        });
    }
    else if(char === "Eastern"){
        document.querySelectorAll('.Indonesian').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Chinese').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Western').forEach((elem) => {
            elem.style.display = 'none';
        });
        document.querySelectorAll('.Eastern').forEach((elem) => {
            elem.style.display = 'flex';
        });
    }

    isFilterOn = false;
    document.querySelector('.filterDrop').style.display = 'none';
}

const searchbar = document.getElementById('searchBar');

const filterData = (query) => {
    const allCard = document.querySelectorAll('.productCard');

    allCard.forEach(elem => {
        let data = elem.querySelector('h4');
        if (!data.innerHTML.toLowerCase().startsWith(query.toLowerCase())){
            elem.style.display = 'none'
        }
        else{
            elem.style.display = 'flex'
        }
    });
}

searchbar.addEventListener('input', () => {
    filterData(searchbar.value)
})
