window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function menuToggle() {
  var myMenuToggle = document.getElementById("btnss");
  var navigation = document.querySelector('.navigation')
  myMenuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
