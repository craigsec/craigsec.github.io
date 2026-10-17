/* frame-buster: if this page is loaded inside an <iframe>, break out of it;
   if the framing page blocks that (sandbox), hide our content instead. */
(function(){ try { if (window.self !== window.top) { window.top.location.href = window.location.href; } }
  catch (e) { try { document.documentElement.style.display = 'none'; } catch (_) {} } })();
