var menuIcon = document.getElementById("menu-btn");
var sidebar = document.querySelector(".sidebar");
var vidConainer = document.querySelector(".container");
var searchBtn = document.querySelector(".search-mobile");
var subBtn = document.getElementById("sub-btn")
var subBtnactive = document.querySelector(".active-btn")
var replyBtn = document.getElementById("reply")

document.body.onscroll = function () {
    document.querySelector(".search-form").classList.remove("search-form-active")
}

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar")
    vidConainer.classList.toggle("larg-container")

}

searchBtn.onclick = function () {
    document.querySelector(".search-form").classList.toggle("search-form-active")
}


subBtn.onclick = function () {
    subBtn.classList.toggle("active-btn");
    if (subBtn.innerHTML === "Subscribe") {
        subBtn.innerHTML = "Subscribed";
    }else{
        subBtn.innerHTML = "Subscribe"
    }    
}

replyBtn.onclick = function () {
    document.getElementById("reply-space").classList.toggle("active-reply");
    document.querySelector(".Comment-to-comment").classList.toggle("active-reply");

}


