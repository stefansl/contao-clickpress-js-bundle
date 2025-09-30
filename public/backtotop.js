/*
 * BACK TO TOP
 * @author: Stefan Schulz-Lauterbach <ssl@clickpress.de>
 */

(function () {

  const btnBackToTop = document.getElementById("back-to-top");

  console.log(btnBackToTop);
  const backToTop = function () {
    if (800 >= window.scrollY) {
      btnBackToTop.classList.remove("is-visible");
    } else {
      btnBackToTop.classList.add("is-visible");
    }
  };

  function scrollToTop(e) {
    e.preventDefault();
    window.scroll({top: 0, left: 0, behavior: "smooth"});
  }

  btnBackToTop.addEventListener("click", scrollToTop);

    window.addEventListener(
        "scroll",
        function () {
            requestAnimationFrame(backToTop);
        }, {
            capture: true,
            passive: true
        }
    );

})();
