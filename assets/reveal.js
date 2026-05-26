// staggered reveal on scroll — progressive enhancement
// js-loaded class is required so CSS only hides elements when JS runs
(function () {
  document.body.classList.add('js-loaded');

  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var siblings = Array.prototype.slice.call(
          e.target.parentElement.querySelectorAll('.reveal')
        );
        var idx = siblings.indexOf(e.target);
        e.target.style.transitionDelay = Math.min(idx, 5) * 85 + 'ms';
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
