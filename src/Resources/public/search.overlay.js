/*
 * SEARCH OVERLAY
 * @author: Stefan Schulz-Lauterbach <ssl@clickpress.de>
 */

/* jshint node: true */

(function () {

  'use strict';

// Search
  var elSearchTrigger = document.getElementById('searchtrigger'),
    elSearch = document.getElementById('search'),
    btnCloseSearch = document.getElementById('close-search'),
    wrapper = document.getElementById('wrapper'),
    inputSearch = elSearch.querySelector('input.input-search');

// Open search
  elSearchTrigger.addEventListener('click', function (el) {
    el.preventDefault();
    this.classList.add('is-active');
    elSearch.classList.add('is-active');
    wrapper.classList.add('is-blurred');
    document.body.classList.add('search-open');
    //body.classList.add('stop-scrolling');
    //console.log(inputSearch);
    inputSearch.focus();
  });

// Close search
  var closeSearch = function () {
    elSearchTrigger.classList.remove('is-active');
    wrapper.classList.remove('is-blurred');
    document.body.classList.remove('stop-scrolling');
    elSearch.classList.remove('is-active');
    document.body.classList.remove('search-open');
  };

  btnCloseSearch.addEventListener('click', function (el) {
    el.preventDefault();
    closeSearch();
  });

  window.addEventListener(
    'keydown',
    function (event) {
      if (event.key === 'Escape') {
        closeSearch();
      }
    },
    true
  );
})();
