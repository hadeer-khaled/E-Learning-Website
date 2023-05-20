function testimonialSider() {
    const carouselOne = document.getElementById("carouselOne")
    if (carouselOne) {
        carouselOne.addEventListener("slid.bs.carousel", (e) => {
            const activation = e.currentTarget.querySelector(".active");
            document.querySelector(".js-testimonial-img").src =
                activation.getAttribute("data-js-testimonial-img")
        })
    }
}
testimonialSider();

// ---------------- Style Switcher ------------------ // 

function styleSwitcherToggle() {
    const styleSwitcher = document.querySelector(".js-style-switcher")
    var styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler")
    styleSwitcherToggler.addEventListener("click", function () {
        styleSwitcher.classList.toggle("open")
        this.querySelector("i").classList.toggle("fa-times")
        this.querySelector("i").classList.toggle("fa-cog")
    })
}
styleSwitcherToggle()

// ---------------- Color Themes ------------------ // 
function colorThemes() {
    const colorStyle = document.querySelector(".js-color-style");
    var themeColorContainer = document.querySelector(".js-theme-colors")
    themeColorContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            // console.log(target.getAttribute("data-js-theme-color"))
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"))
            setColor()
        }
    });

    if (localStorage.getItem("color") !== null) {
        setColor()
    }
    else {
        // const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        // console.log(defaultColor)
        document.querySelector("[data-js-theme-color= color-1]").classList.add("active")
    }

    function setColor() {
        let path = colorStyle.getAttribute("href").split("/")
        path = path.slice(0, path.length - 1)
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css")
        // console.log(path)
        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active")
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active")
    };
}

colorThemes()


// ---------------- Dark Mode ------------------ // 
function themeLightDark() {
    const darkModeCheckBox = document.querySelector(".js-dark-mode")
    darkModeCheckBox.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("dark-theme", "true");

        }
        else {
            localStorage.setItem("dark-theme", "false");

        }
        themeMode()
    });
    function themeMode() {
        if (localStorage.getItem("dark-theme") === "false") {
            document.body.classList.remove("dark")
        }
        else {
            document.body.classList.add("dark")

        }
    }

    if (localStorage.getItem("dark-theme") !== null) {
        themeMode()
    }
    if (document.body.classList.contains("dark")) {
        darkModeCheckBox.checked = true;
    }
}
themeLightDark()

// // ---------------- Glass Effect ------------------ //

function themeGlassEffect() {
    const glassEffectCheckBox = document.querySelector(".js-glass-effect")
    const glassStyle = document.querySelector(".js-glass-style")

    glassEffectCheckBox.addEventListener("click", function () {
        if (this.checked) {
            localStorage.setItem("glass-effect", "true");

        }
        else {
            localStorage.setItem("glass-effect", "false");
        }
        enableGlass()
    });

    function enableGlass() {
        if (localStorage.getItem("glass-effect") === "true") {
            glassStyle.removeAttribute("disabled")
        }
        else {
            glassStyle.disabled = true;
        }
    };

    if (localStorage.getItem("glass-effect") !== null) {
        enableGlass();
        // console.log("true")
    }
    
    if (!(glassStyle.hasAttribute("disabled"))) {
        glassEffectCheckBox.checked = true;
    }
}
themeGlassEffect()
