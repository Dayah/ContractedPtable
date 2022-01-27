
/*
	Elements.js
	
	Purpose:
		This file would include all the functions and classes that are required to store and update
		information for the elements.
*/

// This array will hold our Element objects containing the data
var elements = new Array(totalNumElements);


/*
	Name:		loadElementInformation
	Purpose: 	Loads element data from external Elements.xml file and then calls a helper function to do the
				actual parsing.
	Params: 	None
	Return: 	None
*/

// XML document used to go between functions


function loadElementInformation()
{	
	var xmlDoc;
	
	//Code for IE
	if (window.ActiveXObject)
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;	
		xmlDoc.load(xmlElementsFile);
		parseXMLElementData(xmlDoc);
	}
	//Code for Mozilla
	else if (document.implementation && document.implementation.createDocument)
	{
//		xmlDoc=document.implementation.createDocument("","",null);
//		xmlDoc.async=false;	
//		xmlDoc.load(xmlElementsFile);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", xmlElementsFile, false);
		xhr.send(null);
		parseXMLElementData(xhr.responseXML);
	}
	
}

/*
	Name:		parseXMLElementData
	Purpose: 	This method actually parses the data that was loaded previously into the XML doc.  It then stores
				the data into our elements array objects for easy retrieval later.
	Params: 	None
	Return: 	None
*/
function parseXMLElementData(xmlDoc)
{
	var xmlOuterNodeList;
	var xmlInnerNodeList;
	var newElement;
	
	// Get the main nodes for the document
	xmlOuterNodeList = xmlDoc.lastChild.childNodes;
	
	// Loop through all the main nodes to create an element based off the information
	// in each
	for (var i=0; i<xmlOuterNodeList.length; i++)
	{
		if (!is_ignorable(xmlOuterNodeList[i])) 		
		{
			// Set up a new element object
			newElement = new Element();	
	
			// Get inner data nodes from the main element node
			xmlInnerNodeList = xmlOuterNodeList[i].childNodes;
						
			// Loop through data nodes
			for (var k=0; k<xmlInnerNodeList.length;k++)
			{	
				// Add new data to new element
				if (!is_ignorable(xmlInnerNodeList[k])) 
				{
					newElement.set(xmlInnerNodeList[k].nodeName, xmlInnerNodeList[k].firstChild.nodeValue);
				}
			}
	
			// Add new element to array of elements
			elements[i] = newElement;
			
		}
		
	}	
}

/* 
	Element class
*/
function Element()
{
	// An associative array holding all our elements
	this.items = {"iMass": null,  "iName": null,  "iSymbol": null,
				 "iMP": null, "iBP": null, "iDensity": null,
				 "iEarthCrust": null, "iYear": null,   "iGroup": null,
				 "iPeriod": null, "iEC": null, "iIE": null,
				 "iTC": null, "iSHC": null, "iHoV": null,
				 "iFIP": null, "iEN": null, "iAR": null,
				 "iAV": null, "iCR": null, "iECo": null,
				 "iSeries": null, "i1s": null, "i2s": null,
				 "i2p": null, "i3s": null, "i3p": null,
				 "i3d": null, "i4s": null, "i4p": null,
				 "i4d": null, "i4f": null, "i5s": null,
				 "i5p": null, "i5d": null, "i5f": null,
				 "i6s": null, "i6p": null, "i6d": null,
				 "i7s": null };

	// Method to get the actual array
	this.getArray = function()
	{
		return this.items;
	}
	
	// Method to set a value in the array
	this.set = 
	function(index, value)
	{
		this.items[index] = value;		
	};
	
	// Method to get a value in the array
	this.get =
	function(index)
	{
		return this.items[index];
	};
}