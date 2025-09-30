/*
 * BACK TO TOP
 * @author: Stefan Schulz-Lauterbach <ssl@clickpress.de>
 */

(function () {
  "use strict";

  const btnBackToTop = document.getElementById("back-to-top");

  const backToTop = function () {
    if (200 >= window.scrollY) {
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

})();
