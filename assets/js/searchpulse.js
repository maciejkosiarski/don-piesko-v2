(function() {
  var sp = { siteKey: '5714eaea201cf7f40857bb61b58d40d535ce431054eb13b1bf595956419a610c', endpoint: 'https://searchpulse.bieda.it/api/events' };
  document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('pricing-search-input');
    if (!input) return;

    var debounceTimer = null;
    var lastLogged = '';

    input.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        var q = input.value.trim();
        if (q.length < 3) return;
        if (q === lastLogged) return;
        lastLogged = q;

        var visible = document.querySelectorAll('.pricing__row:not([hidden])').length;

        fetch(sp.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Site-Key': sp.siteKey },
          body: JSON.stringify({
            query: q,
            resultsCount: visible,
            lang: document.documentElement.lang || 'pl',
            path: location.pathname
          }),
          keepalive: true,
          mode: 'cors',
          credentials: 'omit'
        }).catch(function() {});
      }, 900);
    });
  });
})();
