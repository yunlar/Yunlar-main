if (/Mobi/.test(navigator.userAgent) && !/iPad/.test(navigator.userAgent)) {

  const menuElement = document.querySelector('.menu-items');
  const iconElement = document.querySelector('.hamburger-icon');
  const logoElement = document.querySelector('.logo');

  menuElement.classList.remove('menu-items');
  menuElement.classList.add('menu-items-mob');

  iconElement.classList.remove('hamburger-icon');
  iconElement.classList.add('hamburger-icon-mob');

  logoElement.classList.remove('logo');
  logoElement.classList.add('logo-mob');
}

  const hamburgerIcon = document.querySelector('.hamburger-icon-mob');
const menuItems = document.querySelector('.menu-items-mob');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  menuItems.classList.toggle('active');
});

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