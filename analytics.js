/* Minimal, privacy-conscious traffic analytics for Chef Cyril's site. */
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture opt_out_capturing has_opted_out_capturing".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

posthog.init('phc_kriY6oLdrzX5te5K5BD2tByomTBNDY7MShafdbTSJB3E', {
  api_host: 'https://us.i.posthog.com',
  autocapture: false,
  capture_pageview: false,
  capture_pageleave: false,
  disable_session_recording: true,
  person_profiles: 'identified_only',
  persistence: 'memory',
  loaded: function (ph) {
    ph.capture('cyril_pageview', {
      site: 'chefcyrilkabaoglu.com',
      path: window.location.pathname,
      title: document.title,
      referrer_host: document.referrer ? new URL(document.referrer).hostname : ''
    });
  }
});
