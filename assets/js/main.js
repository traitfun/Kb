/* Shared navigation behaviour. Activates only if the markup contains
   a toggle: <button class="nav-toggle" aria-controls="..."> */
(function () {
  'use strict';
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;
  var menu = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!menu) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
