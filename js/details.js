$(document).ready(function(){
	$("#siteTitle").html(json.website_name);
	$("footer.site-title").html("&copy; "+json.website_name);
	var passedItemId = GLOB_SITE.getUrlParameter("item_id");
	for (var i = 0; i < json.rows.length; i++){
		// for (var j = 0; j < json.category[i].items.length; j++){
			var itemName = json.rows[i].doc.name;
			var itemId = json.rows[i].doc["_id"];
			var itemPrice = json.rows[i].doc.usaDollarPrice;
			var productDesc = json.rows[i].doc.description;
			if (passedItemId === itemId) {
				$("#productTitle").html(itemName.toUpperCase());
				$("#productPrice").html(itemPrice);
				$("#productDesc").html(productDesc);
			}
		// }
	}
});