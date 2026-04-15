(function() {
  var sp = { siteKey: '5714eaea201cf7f40857bb61b58d40d535ce431054eb13b1bf595956419a610c', endpoint: 'https://searchpulse.bieda.it/api/events' };
  document.addEventListener('DOMContentLoaded', function() {
    var input = document.querySelector('input[type=search], input[name=q], input[name=search]');
    if (!input) return;
    input.addEventListener('change', function() {
      var q = input.value.trim();
      if (!q) return;
      fetch(sp.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Site-Key': sp.siteKey },
        body: JSON.stringify({ query: q, resultsCount: 0 })
      });
    });
  });
})();
