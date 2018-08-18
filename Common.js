/*========================================================================
  Right(string, length): Returns a specified number of characters from the
                       right side of a string
========================================================================*/

function Right(str, n)
/***
		IN: str - the string we are RIGHTing
			n - the number of characters we want to return

		RETVAL: n characters from the right side of the string
***/
{
		if (n <= 0)     // Invalid bound, return blank string
		   return "";
		else if (n > String(str).length)   // Invalid bound, return
		   return str;                     // entire string
		else { // Valid bound, return appropriate substring
		   var iLen = String(str).length;
		   return String(str).substring(iLen, iLen - n);
		}
}



/*========================================================================
  Left(string, length): Returns a specified number of characters from the
                      left side of a string
========================================================================*/

function Left(str, n)
/***
		IN: str - the string we are LEFTing
			n - the number of characters we want to return

		RETVAL: n characters from the left side of the string
***/
{
		if (n <= 0)     // Invalid bound, return blank string
				return "";
		else if (n > String(str).length)   // Invalid bound, return
				return str;                // entire string
		else // Valid bound, return appropriate substring
				return String(str).substring(0,n);
}




/*============================================================================
  Mid(string, start, length): Returns a specified number of characters from a
                            string
============================================================================*/

function Mid(str, start, len)
/***
		IN: str - the string we are LEFTing
			start - our string's starting position (0 based!!)
			len - how many characters from start we want to get

		RETVAL: The substring from start to start+len
***/
{
		// Make sure start and len are within proper bounds
		if (start < 0 || len < 0) return "";

		var iEnd, iLen = String(str).length;
		if (start + len > iLen)
				iEnd = iLen;
		else
				iEnd = start + len;

		return String(str).substring(start,iEnd);
}





/* ==================================================================
   LTrim(string) : Returns a copy of a string without leading spaces.
================================================================== */

function LTrim(str)
/***
		PURPOSE: Remove leading blanks from our string.
		IN: str - the string we want to LTrim

		RETVAL: An LTrimmed string!
***/
{
		var whitespace = new String(" \t\n\r");

		var s = new String(str);

		if (whitespace.indexOf(s.charAt(0)) != -1) {
			// We have a string with leading blank(s)...

			var j=0, i = s.length;

			// Iterate from the far left of string until we
			// don't have any more whitespace...
			while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
				j++;


			// Get the substring from the first non-whitespace
			// character to the end of the string...
			s = s.substring(j, i);
		}

		return s;
}



/*========================================================================
  Right(string, length): Returns a specified number of characters from the
                       right side of a string
========================================================================*/

function Right(str, n)
/***
		IN: str - the string we are RIGHTing
			n - the number of characters we want to return

		RETVAL: n characters from the right side of the string
***/
{
		if (n <= 0)     // Invalid bound, return blank string
		   return "";
		else if (n > String(str).length)   // Invalid bound, return
		   return str;                     // entire string
		else { // Valid bound, return appropriate substring
		   var iLen = String(str).length;
		   return String(str).substring(iLen, iLen - n);
		}
}


/*=============================================================
  Trim(string) : Returns a copy of a string without leading or
               trailing spaces
=============================================================*/
function Trim(str)
/***
		PURPOSE: Remove trailing and leading blanks from our string.
		IN: str - the string we want to Trim

		RETVAL: A Trimmed string!
***/
{
		return RTrim(LTrim(str));
}



/* addEvent: simplified event attachment */
function addEvent( obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener( type, fn, false );
		EventCache.add(obj, type, fn);
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
		EventCache.add(obj, type, fn);
	}
	else {
		obj["on"+type] = obj["e"+type+fn];
	}
}
	
var EventCache = function(){
	var listEvents = [];
	return {
		listEvents : listEvents,
		add : function(node, sEventName, fHandler){
			listEvents.push(arguments);
		},
		flush : function(){
			var i, item;
			for(i = listEvents.length - 1; i >= 0; i = i - 1){
				item = listEvents[i];
				if(item[0].removeEventListener){
					item[0].removeEventListener(item[1], item[2], item[3]);
				};
				if(item[1].substring(0, 2) != "on"){
					item[1] = "on" + item[1];
				};
				if(item[0].detachEvent){
					item[0].detachEvent(item[1], item[2]);
				};
				item[0][item[1]] = null;
			};
		}
	};
}();
addEvent(window,'unload',EventCache.flush);

/* window 'load' attachment */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

/* grab Elements from the DOM by className */
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

/* toggle an element's display */
function toggle(obj) {
	var el = document.getElementById(obj);
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = '';
	}
}

/* insert an element after a particular node */
function insertAfter(parent, node, referenceNode) {
	parent.insertBefore(node, referenceNode.nextSibling);
}

/* Array prototype, matches value in array: returns bool */
Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

/* get, set, and delete cookies */
function getCookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}
	
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+"="+escape( value ) +
		( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + //expires.toGMTString()
		( ( path ) ? ";path=" + path : "" ) +
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}
	
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

/* quick getElement reference */
function $() {
	var elements = new Array();
	for (var i = 0; i < arguments.length; i++) {
		var element = arguments[i];
		if (typeof element == 'string')
			element = document.getElementById(element);
		if (arguments.length == 1)
			return element;
		elements.push(element);
	}
	return elements;
}