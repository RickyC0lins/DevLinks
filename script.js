function darkMode() {
    const html = document.documentElement
    html.classList.toggle("light");

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute('src', './images/profile-test.jpg')
    } else {
        img.setAttribute('src', './images/images.jpg')
    }
}