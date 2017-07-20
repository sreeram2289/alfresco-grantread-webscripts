/*set permission to noderef referenced content using JavaScrip API*/

//search for node using the findNode(noderef) method as we already have the noderef
//if we have reference path then we can use findNode(referenceType, reference)

var referencedNode = search.findNode(args.noderef); // returns ScriptNode
var scriptUser = groups.getUser(args.username); //returns ScriptUser object

//make sure node and the user exists
if(referenceNode != null && scriptUser != null){
	//lets says read permission is "Read", set this to the user specified for thios node
	//we can use the setPermission(permission, authority) method to assign this user with read permission
	//authority can be a userName or a group
	referenceNode.setPermission("Read", scriptUser.userName);
	//redirect to success page if neccessary
}else{
	//No node or user was found code
	//if we need to display a message or a page
}
