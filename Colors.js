/*
	This class handles everything related to color schemes.  It contains basic functionality and classses
	used to store colors.
*/

// An associative array holding all our color schemes
var colorSchemes =  {   "iMass": null, 
			"iMP": null, "iBP": null, "iDensity": null,
			"iEarthCrust": null, "iYear": null,   "iGroup": null,
			"iPeriod": null, "iIE": null,
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

var colorSchemeSeries = new SeriesColorScheme(); 
					
/*
	Name:		loadColorInformation
	Purpose: 	Loads color data from external Colors.xml file and then calls a helper function to do the
				actual parsing.
	Params: 	None
	Return: 	None
*/

function loadColorInformation()
{	
	var xmlDoc;
	
	//Code for IE
	if (window.ActiveXObject)
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;	
		xmlDoc.load(xmlColorFile);
		parseColorData(xmlDoc);
	}
	//Code for Mozilla
	else if (document.implementation && document.implementation.createDocument)
	{
//		xmlDoc=document.implementation.createDocument("","",null);
//		xmlDoc.async = false;
//		xmlDoc.load(xmlColorFile);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", xmlColorFile, false);
		xhr.send(null);
		parseColorData(xhr.responseXML);
	}
	
}


/*
	Name:		parseColorData
	Purpose: 	This method actually parses the data that was loaded previously into the XML doc.  It then stores
				the data into our colors array objects for easy retrieval later.
	Params: 	None
	Return: 	None
*/

function parseColorData(xmlDoc)
{
	loadSeriesColors(xmlDoc);
	loadItemColors(xmlDoc);
}

function loadItemColors(xmlDoc)
{
	var xmlOuterNodeList;
	var xmlInnerNodeList;
	var newColorScheme;

	// Get the main nodes for the document
	xmlOuterNodeList = xmlDoc.lastChild.childNodes;
	
	// Loop through all the main nodes to create a color scheme based off the information
	// in each
	for (var i=1; i<xmlOuterNodeList.length; i++)
	{
		if (!is_ignorable(xmlOuterNodeList[i])) 		
		{
			// Set up a new color scheme object
			newColorScheme = new ColorScheme();	
	
			// Get inner data nodes from the main colors node
			xmlInnerNodeList = xmlOuterNodeList[i].childNodes;
				
			// Loop through data nodes
			for (var k=0; k<xmlInnerNodeList.length;k++)
			{	
				// Add new data to new color scheme
				if (!is_ignorable(xmlInnerNodeList[k])) 
				{
					newColorScheme.set(xmlInnerNodeList[k].nodeName, xmlInnerNodeList[k].firstChild.nodeValue);
				}
			}
			
			// Add new color scheme to array of color schemes
			colorSchemes[xmlOuterNodeList[i].nodeName] = newColorScheme;
			
		}
	}
}

function loadSeriesColors(xmlDoc)
{	
	var xmlOuterNodeList;
	var xmlInnerNodeList;
	var newColorScheme;

	// Get the main nodes for the document
	xmlOuterNodeList = xmlDoc.lastChild.childNodes;
	
	if (!is_ignorable(xmlOuterNodeList[0])) 		
	{
		// Get inner data nodes from the main colors node
		xmlInnerNodeList = xmlOuterNodeList[0].childNodes;

		// Loop through data nodes
		for (var k=0; k<xmlInnerNodeList.length;k++)
		{	
			// Add new data to new color scheme
			if (!is_ignorable(xmlInnerNodeList[k])) 
			{
				colorSchemeSeries.set(xmlInnerNodeList[k].nodeName, xmlInnerNodeList[k].firstChild.nodeValue);
			}
		}
	}
}


/*
	Item Color Scheme class
*/

function ColorScheme()
{
	// An associative array holding all our color schemes
	this.items =  {"positiveColor": null, "positiveValue": null, "negativeColor": null, "negativeValue": null, "nonAvailableColor": null};

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

/*
	Series Scheme class
*/

function SeriesColorScheme()
{
	// An associative array holding all our color values for each series
	this.items = {  "Zero": null, "One": null, "Two": null, "Three": null, "Four": null, 
			"Five": null, "Six": null, "Seven": null, "Eight": null, 	
			"Nine": null };

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
