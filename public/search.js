/*
 * SEARCH
 * @author: Stefan Schulz-Lauterbach <ssl@clickpress.de>
 */

/* jshint node: true */

(function () {

  'use strict';

  const btnSearch = document.querySelectorAll('a.btn-search'),
    searchBar = document.getElementById('searchbar'),
    inputSearch = searchBar.querySelector('input.text'),
    btncloseSearch = document.getElementById('close-search');

  // close search
  const closeSearch = function (event) {

    if (event) {
      event.preventDefault();
    }

    if (searchBar) {
      searchBar.classList.remove('is-active');
    }

    document.body.classList.remove('stop-scrolling');
    document.body.classList.remove('search-open');
  };

  // Open search
  const openSearch = function (event) {

    if (event) {
      event.preventDefault();
    }
    if (searchBar) {
      searchBar.classList.toggle('is-active');
    }
    document.body.classList.toggle('stop-scrolling');
    document.body.classList.toggle('search-open');
    inputSearch.focus();

    window.addEventListener('keyup', function (event) {
      if (event.key === 'Escape') {
        closeSearch();
      }
    });
  };

  // Add listeners
  for (var i = 0; i < btnSearch.length; i++) {
    btnSearch[i].addEventListener('click', openSearch);
  }

  btncloseSearch.addEventListener('click', closeSearch);
})();
