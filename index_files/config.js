﻿CKEDITOR.editorConfig=function(a){function b(a){return 0<a.find("[style*\x3d'text-shadow']").count()?!1:""===a.$.style.textShadow}a.language="en";a.disableObjectResizing=!0;a.contentsCss=[CKEDITOR.basePath+"contents.css"];CKEDITOR.env.ie&&a.contentsCss.push(CKEDITOR.basePath+"content_ie.css");a.skin="empty";a.ignoreEmptyParagraph=!1;a.autoGrow_minHeight=0;a.autoGrow_maxHeight=0;a.height=0;a.coreStyles_underline={element:"span",styles:{"text-decoration":"underline"},overrides:["u"],childRule:function(a){return(0<
a.find("[class^\x3d'color_']").count()||0===a.$.className.indexOf("color_")||a.getStyle("color")||0<a.find("[style^\x3d'color']").count()?!1:!0)&&b(a)}};a.coreStyles_bold={element:"span",styles:{"font-weight":"bold"},overrides:["strong","b"],childRule:b};a.coreStyles_italic={element:"span",styles:{"font-style":"italic"},overrides:["em","i"],childRule:b};a.allowedContent={"span ol ul li":{styles:"font-family, font-size, font-style, font-weight, letter-spacing, color, text-shadow, background-color, letter-spacing",
attributes:["data-wix-placeholder","contenteditable"]},"p h1 h2 h3 h4 h5 h6 span ol ul li":{classes:"*",styles:["text-align","text-decoration","text-shadow","font-size","display"],attributes:["dir"]},"p h1 h2 h3 h4 h5 h6 ol ul li":{styles:["margin-left","margin-right"]},"p h1 h2 h3 h4 h5 h6 li":{styles:["line-height"]},a:{attributes:["!dataquery"]},"h1 h2 h3 h4 h5 h6 br":!0};a.plugins="autogrow,basicstyles,bidi,clipboard,enterkey,entities,htmlwriter,indent,indentblock,indentlist,justify,list,pastefromword,pastetext,removeformat,selectall,sourcearea,undo,wysiwygarea"};