// script.js

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function showMenu() {
    var linkMenu = document.getElementById("NavLinks");
    if (linkMenu.className == "hidemenu") {
        linkMenu.className = "showmenu";
    } else {
        linkMenu.className = "hidemenu";
    }
} 

function showSidebar() {
    var sidebarList = document.getElementById("SidebarList");
    if (sidebarList.className == "hidemenu") {
        sidebarList.className = "showmenu";
    } else {
        sidebarList.className = "hidemenu";
    }
} 
