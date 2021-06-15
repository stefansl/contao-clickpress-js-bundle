/*
 * NAVIGATION
 * @author: Stefan Schulz-Lauterbach <ssl@clickpress.de>
 */

(function () {
  "use strict";

  /* Mobile Nav */
  const body = document.body,
    hamburger = document.getElementById("hamburger"),
    mainnavi = document.getElementById("mainnavi"),
    elAnchorSubmenu = mainnavi.querySelectorAll("a.submenu");

  /* Mobile trigger / Hamburger */
  const openMobileMenu = function (ev) {
    ev.preventDefault();
    this.classList.toggle("is-active");
    mainnavi.classList.toggle("is-active");
    body.classList.toggle("mobile-nav-open");
  };

  hamburger.addEventListener("click", openMobileMenu);

  /* Mobile Nav level_2 */
  const anchorSubmenu = mainnavi.querySelectorAll('a.submenu');

  const closeAllSubmenus = function () {
    for (let i = 0; i < anchorSubmenu.length; i++) {
      anchorSubmenu[i].classList.remove('active');
      anchorSubmenu[i].parentNode.classList.remove('active');
    }
  };

  const handleMobileSubClick = function (e) {
    e.preventDefault();
    closeAllSubmenus();

    this.parentNode.classList.add('active');
    this.classList.add('active');

  };

  for (let index = 0; index < anchorSubmenu.length; index++) {
    anchorSubmenu[index].addEventListener("click", handleMobileSubClick);
    anchorSubmenu[index].addEventListener('focusin', function (ev) {
      ev.relatedTarget.parentElement.classList.add('subnav-open');
    }, {
      capture: true
    });
  }

})();
