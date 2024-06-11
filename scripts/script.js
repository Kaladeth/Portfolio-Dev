// Accordéon de la partie Parcours
var accordeon = document.getElementsByClassName("accordeon");

for(var element of accordeon) {
    element.addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}