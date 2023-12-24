  (function(d) {
    var config = {
      kitId: 'cvj6qcn',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  (function(d) {
    var config = {
      kitId: 'cvj6qcn',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


document.addEventListener('DOMContentLoaded', function() {
  var targets = document.querySelectorAll('.target, .info');
  var isClicked = false;

  targets.forEach(function(target) {
    target.addEventListener('click', function() {
      if (isClicked && !this.classList.contains('target-clicked') && !this.classList.contains('info-clicked')) {
        return;
      }

      this.classList.toggle(this.classList.contains('target') ? 'target-clicked' : 'info-clicked');
      var newText = this.getAttribute('data-new-text');
      var textElement = this.parentElement.nextElementSibling.querySelector('p');
      if (this.classList.contains('target-clicked') || this.classList.contains('info-clicked')) {
        this.setAttribute('data-original-text', textElement.textContent);
        textElement.textContent = newText;
        isClicked = true;
      } else {
        var originalText = this.getAttribute('data-original-text');
        textElement.textContent = originalText;
        isClicked = false;
      }
    });
  });
});