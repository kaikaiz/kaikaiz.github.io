<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.65">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; color: #000000; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// Example: smooth scrolling for nav links</span></p>
<p class="p1"><span class="s1">document.querySelectorAll('header nav a').forEach(anchor =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>anchor.addEventListener('click', function(e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>e.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>document.querySelector(this.getAttribute('href')).scrollIntoView({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>behavior: 'smooth'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
