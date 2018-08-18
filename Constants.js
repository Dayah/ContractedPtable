/*
	This file handles all the constants for the application.
*/

// Location of elements XML file
var xmlElementsFile = "elements.xml";

// Location of colors XML file
var xmlColorFile = "colors.xml";

// Hover on with click portion 
// If this is off then the click is automatically defaulted
var doOnHover = true;

// Total number of elements
var totalNumElements = 111;

// Defaults 
var defaultElement = "el1";				// Number of element we wish to load first
var defaultColorScheme = "iMass"; 			// Name of data element that we want to use first

// Active color
var activeElementColor = "#AAAAAA";

// Nodes that contain information for the left hand side of the data
// Have to directly reference these objects to get the data from, does
// not allow for a dynamic structure as the right hand data elements
var elementSymbol = "iSymbol";
var elementWeight = "iMass";

// Classes that are used to size up the graph 
// If you alter the class name that is applied to the graph element then you will also
// need to alter it here
var classForSmallGraph = "graphSmall";
var classForLargeGraph = "graphLarge";

// Nodes for states
var meltingPointNode = "iMP";
var boilingPointNode = "iBP";
var seriesNode = "iSeries";
var yearNode = "iYear";
var electronConfigNode = "iEC";

// State colors
var gasColor = "#FF0000";
var liquidColor = "#00FF00";
var solidColor = "#000000";

// Graph variables
var graphLargeHeight = 800;
var graphLargeWidth = 850;
var graphSmallHeight = 450;
var graphSmallWidth = 450;
