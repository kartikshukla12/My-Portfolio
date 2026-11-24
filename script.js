(function(){
  var snippets = {
    c: {
      code: '#include <stdio.h>\n\nint main(void) {\n    printf("Hi, I am Kartik.\\n");\n    return 0;\n}',
      note: 'Where I started: C, with all the ceremony.'
    },
    py: {
      code: 'print("Hi, I am Kartik.")\n\n# same greeting, one line',
      note: 'The same thing in Python.'
    }
  };
  var code = document.getElementById('code'), note = document.getElementById('codenote');
  var btns = document.querySelectorAll('.snip button');
  function show(l){
    code.textContent = snippets[l].code;
    note.textContent = snippets[l].note;
    btns.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.lang === l ? 'true' : 'false'); });
  }
  btns.forEach(function(b){ b.addEventListener('click', function(){ show(b.dataset.lang); }); });
  show('c');

  // highlight current section in nav
  var links = document.querySelectorAll('nav a');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (e.isIntersecting) {
          links.forEach(function(a){
            a.setAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false');
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main .sec').forEach(function(s){ io.observe(s); });
  }
})();