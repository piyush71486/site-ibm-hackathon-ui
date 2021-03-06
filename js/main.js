var GLOB_SITE = {};
$(document).ready(function(){
	var json = null;
	$.ajax({
		url: "http://catalogapi-prisood.mybluemix.net/items",
		method: "GET",
		dataType: "json",
		success: function(data) {
			json = data;
		}
	});
	var productsListElements = "";
	var productsGridElements = "";
	// $("#siteTitle").html(json.website_name);
	$("footer.site-title").html("&copy; "+json.website_name);

	for (var i = 0; i < json.rows.length; i++){
		// productsListElements = productsListElements + '<li class="product-category"><a href="#">'+json.category[i].cat_name.toUpperCase()+'</a></li>';
		// for (var j = 0; j < json.rows[i].length; j++){
			var itemName = json.rows[i].doc.name;
			var itemId = json.rows[i].doc["_id"];
			var itemPrice = json.rows[i].doc.usaDollarPrice;
			productsGridElements = productsGridElements + '<div class="col-md-4 col-xs-6 product-thumb-container"><a href="details.html?item_id='+itemId+'"><img src="images/label15.png" alt="Product" class="product-image"><div class="product-name">'+itemName+'</div><div class="product-name">$ '+itemPrice+'</div></a></div>';
		// }
	}
	$("#productsGrid").html(productsGridElements);
	// $("#productsList").html(productsListElements);

	$(".product-category").on('click',function(){
		productsGridElements = "";
		for (var i = 0; i < json.category.length; i++){
			if (json.category[i].cat_name.toUpperCase() === $(this).text()){
				for (var j = 0; j < json.category[i].items.length; j++){
					var itemName = json.rows[i].doc.name;
					var itemId = json.rows[i].doc["_id"];
					var itemPrice = json.rows[i].doc.usaDollarPrice;
					productsGridElements = productsGridElements + '<div class="col-md-4 col-xs-6 product-thumb-container"><a href="details.html?item_id='+itemId+'"><img src="images/label15.png" alt="Product" class="product-image"><div class="product-name">'+itemName+'</div><div class="product-name">$ '+itemPrice+'</div></a></div>';
				}
			}
		}
		$("#productsGrid").html(productsGridElements);
	});
});