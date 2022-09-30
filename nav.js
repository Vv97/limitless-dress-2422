window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav")
    nav.classList.toggle("sticky");
    let p = document.querySelectorAll(".nav-links >  li > a")
    let img = document.querySelector(".logo > img:nth-child(1)")
    let img1 = document.querySelector(".logo > img:nth-child(2)")
    let b = document.querySelectorAll(".nav-button > ul > li >  a");
    let serach = document.querySelector(".n-serach > a")
    let btn = document.querySelector(".nbtn-link > a")
    let btn2 = document.querySelector(".nbtn-link1 > a")






    if (window.pageYOffset > 50) {
        p.forEach(el => {
            el.style.color = "black"
        })
        nav.style.backgroundColor = "white";
        serach.style.color = "black";
        btn.style.border = "1px solid blue"
        btn.style.color = "blue"
        btn2.style.border = "1x solid blue"
        btn2.style.color = "white"
        btn2.style.backgroundColor = "blue"
        img.style.display = "none"
        img1.style.display = "block"
    } else if (window.pageYOffset < 5) {
        img.style.display = "block"
        nav.style.backgroundColor = "#303030";
        img1.style.display = "none"
        p.forEach(el => {
            el.style.color = "white"
        })

        serach.style.color = "white";
        btn.style.border = "1px solid white"
        btn.style.color = "white"
        btn2.style.border = "1px solid white"
        btn2.style.color = "black"
        btn2.style.backgroundColor = "white"
    }



}
)