/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<body>\n\n<div id=\"header\">\n<h1>City Gallery</h1>\n</div>\n\n<div id=\"nav\">\nLondon<br>\nParis<br>\nTokyo\n</div>\n\n<div id=\"section\">\n<h1>London</h1>\n<p>London is the capital city of England. It is the most populous city in the United Kingdom,\nwith a metropolitan area of over 13 million inhabitants.</p>\n<p>Standing on the River Thames, London has been a major settlement for two millennia,\nits history going back to its founding by the Romans, who named it Londinium.</p>\n</div>\n\n<div id=\"footer\">\nCopyright © W3Schools.com\n</div>\n\n</body>"},"scriptrdata":[]}}*#*#*/
var content= '<body>\n\
\n\
<div id=\"header\">\n\
<h1>City Gallery</h1>\n\
</div>\n\
\n\
<div id=\"nav\">\n\
London<br>\n\
Paris<br>\n\
Tokyo\n\
</div>\n\
\n\
<div id=\"section\">\n\
<h1>London</h1>\n\
<p>London is the capital city of England. It is the most populous city in the United Kingdom,\n\
with a metropolitan area of over 13 million inhabitants.</p>\n\
<p>Standing on the River Thames, London has been a major settlement for two millennia,\n\
its history going back to its founding by the Romans, who named it Londinium.</p>\n\
</div>\n\
\n\
<div id=\"footer\">\n\
Copyright © W3Schools.com\n\
</div>\n\
\n\
</body>'; var response = apsdb.httpRespond(); response.write(content);response.close();			