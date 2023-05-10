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