/*
	Behaviours.js
	
	Purpose:
		This file will add all event handlers to the proper HTML elements
		Uses Behaviour.js for this functionality.
		
	Dependencies:
		Requires Behaviour.js to be installed.  This can be located at
		http://bennolan.com/behaviour/
	
*/

function loadBehaviours()
{
	/*
		This variable implementation allows us to use selectors to determine what elements to add 
		behaviours too
		
		if doOnHover = true from the constants file then we want to have the events change on mouseover
		otherwise we want it to occur onclick
	*/
	if (doOnHover)
	{
		var myrules = {
		
			'.element' : function(el){
					
					el.onmouseover = function(){
						loadElement(el);
					}
					
					el.onclick = function(){
						fixElementHover(el);
					}
				}
			,
			'.elementData' : function(el){
					el.onclick = function(){
						loadColorScheme(el.id);
					}
				}
			,
			'.elementGraphBar' : function(el){
					el.onmouseover = function(){
						loadElement(el);
					}
					
					el.onclick = function(){
						fixElementHover(el);
					}
				}
			,
			'.dataLabel' : function(el){
					el.onmouseover = function(){
						loadColorScheme(el.nextSibling.id);
					}
				}
		};
	}
	// We know if we dont want the elements to change on hover then we want then
	// to change on click
	else
	{
		var myrules = {
		
			'.element' : function(el){
					el.onclick = function(){
						loadElement(el);
					}
				}
			,
			'.elementData' : function(el){
					el.onclick = function(){
						loadColorScheme(el.id);
					}
				}
			,
			'.elementGraphBar' : function(el){
					el.onmouseover = function(){
						loadElement(el);
					}
				}
			,
			'.dataLabel' : function(el){
					el.onmouseover = function(){
						loadColorScheme(el.nextSibling.id);
					}
				}
			
		};			
	}
	
	// Register the behaviour with our behaviours object
	Behaviour.register(myrules);
	
	// Add other behaviours
	document.getElementById("resizeGraph").onclick = function() { resizeGraph(); };
	
	// Menu behaviours
	document.getElementById("menu_iMass").onclick = function() { loadColorScheme("iMass"); };
	document.getElementById("menu_iDensity").onclick = function() { loadColorScheme("iDensity"); };
	document.getElementById("menu_iAR").onclick = function() { loadColorScheme("iAR"); };
	document.getElementById("menu_iAV").onclick = function() { loadColorScheme("iAV"); };
	document.getElementById("menu_iCR").onclick = function() { loadColorScheme("iCR"); };
	document.getElementById("menu_iMP").onclick = function() { loadColorScheme("iMP"); };
	document.getElementById("menu_iBP").onclick = function() { loadColorScheme("iBP"); };
	document.getElementById("menu_iSHC").onclick = function() { loadColorScheme("iSHC"); };
	document.getElementById("menu_iHoV").onclick = function() { loadColorScheme("iHoV"); };
	document.getElementById("menu_iEN").onclick = function() { loadColorScheme("iEN"); };
	document.getElementById("menu_iFIP").onclick = function() { loadColorScheme("iFIP"); };
	document.getElementById("menu_iIE").onclick = function() { loadColorScheme("iIE"); };
	document.getElementById("menu_i1s").onclick = function() { loadColorScheme("i1s"); };
	document.getElementById("menu_i2s").onclick = function() { loadColorScheme("i2s"); };
	document.getElementById("menu_i2p").onclick = function() { loadColorScheme("i2p"); };
	document.getElementById("menu_i3s").onclick = function() { loadColorScheme("i3s"); };
	document.getElementById("menu_i3p").onclick = function() { loadColorScheme("i3p"); };
	document.getElementById("menu_i3d").onclick = function() { loadColorScheme("i3d"); };
	document.getElementById("menu_i4s").onclick = function() { loadColorScheme("i4s"); };
	document.getElementById("menu_i4p").onclick = function() { loadColorScheme("i4p"); };
	document.getElementById("menu_i4d").onclick = function() { loadColorScheme("i4d"); };
	document.getElementById("menu_i4f").onclick = function() { loadColorScheme("i4f"); };
	document.getElementById("menu_i5s").onclick = function() { loadColorScheme("i5s"); };
	document.getElementById("menu_i5p").onclick = function() { loadColorScheme("i5p"); };
	document.getElementById("menu_i5d").onclick = function() { loadColorScheme("i5d"); };
	document.getElementById("menu_i5f").onclick = function() { loadColorScheme("i5f"); };
	document.getElementById("menu_i6s").onclick = function() { loadColorScheme("i6s"); };
	document.getElementById("menu_i6p").onclick = function() { loadColorScheme("i6p"); };
	document.getElementById("menu_i6d").onclick = function() { loadColorScheme("i6d"); };
	document.getElementById("menu_i7s").onclick = function() { loadColorScheme("i7s"); };

	
}