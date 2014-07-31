$(document).ready(function() {

   $('.reloadDiv').click(function()
   {
      var link_name = $(this).attr('id');
      $("#mainSection").load(link_name+".php");
    });

  
   // when the textboxes change value run this function  
	$(".addToBasket").change(function() 
	{
  	 
  	// keep track of number of item
  	var itemCount = itemCounter();

  	// store the values we need for later purposes
  	var nameOfItem = $(this).attr("name");

  	// get variables for updating the stock tags
  	var stockTag = getStock(nameOfItem);
  	var quantity = $(this).val();
  	var stock = $(this).attr('max') - quantity;

  	if(itemCount > 0)
  	{
  		$("#noItems").hide();
  		$("#storeBasket").show();

  		// replace the -'s with spaces throughout the name
  		nameOfItem = nameOfItem.replace(/-/g, ' ');

  		var itemID = $(this).attr('id');
  		
		var money = itemID.substr(itemID.indexOf("-") + 1);
  		var total =  (parseFloat(money) * parseFloat(quantity)).toFixed(2);
  		var found = false;
			
  		// if the item we just changed was set to zero
  		if(quantity === "0")
  		{
		
  			// update the stock pile
 				updateStockTags(stock, stockTag);

  			// cycle through all the item in the shopping cart to find the correct item to remove
  			$('#storeBasket .removable').each(function()
				{
					if($(this).children(":first-child").html() === nameOfItem)
					{	
						$(this).remove();
					}
				});
  		}
			else if (stock > 0) //otherwise we want to add the item to the shopping cart
			{
				// check to see wheather the item is already in the shopping cart
				// if so then increment quantity and total otherwise add whole row
				$('#storeBasket .itemname').each(function()
				{
				 	if(($(this).html()) === nameOfItem)
				 	{
				 		$(this).next().next().html(quantity);
				 		$(this).next().next().next().html("$" + total);
				 		found = true;
				 	}
				});

				if(found != true)
				{
					var htmltoadd = "<tr class='removable'><td class='itemname'>" + nameOfItem + "</td><td>$" + money + 
					 "</td><td>" + quantity + "</td><td class='itemincart'>$" + total + "</td></tr>";

	  			$("#storeBasket tbody").prepend(htmltoadd);
				}
			}

  		// update the total
  		var subtotal = calctotal();
 			$("#totalPrice").html("$" + subtotal);

 			// update the stock pile
 			updateStockTags(stock, stockTag);
			
 		}	
		else // no items in cart
  	{
  		// update the stock pile
 			updateStockTags(stock, stockTag);

			$("#noItems").show();

			$('#storeBasket .removable').each(function()
			{
				$(this).remove();
			});

  		$("#storeBasket").hide();
  	}
  	
	});

	$('#purchase').click(function(){

				$.ajax({ 
					url: '../assets/scripts/getQuantities.php',
	        data: $(this).serialize(),
	        type: 'post',
	        dataType: 'json',
	        success: function(data) {
	            if(data.success)
	            {
	            	parseTable(data['tables']);
	            }
	        },
	        error: function(){
	        	console.log("Error! Could not connect to database.");
	        }
			});
	});


});

// functoin for parsing bedding table that's returned from ajax call to php
function parseTable(allTables)
{

	// get each key=>value pair and print to appropriate tag
	$.each(allTables, function(key, value){
    
    // prep key for use later
    key = key.replace(/\s/g,'-');
	
    // new variable for more manipulating
    var manipulatedKey = key;
    manipulatedKey = manipulatedKey.toLowerCase();
    manipulatedKey = manipulatedKey + "-stock";
	
    if(value == 0)
    {
		$('#'+manipulatedKey).addClass("outOfStock");
		$('#'+manipulatedKey).text('Out of Stock!');
		
			// search through all items with class 'addToBasket' and find the input box that's matching name and hide
			disableQuantityBox(key);
    }
    else
    {
	    setMaxForQuantityBox(key, value); 
    	$('#'+manipulatedKey).text(value + ' in stock');
    }
  
	});

}

// function for updating Stock tags
function updateStockTags(stock, stockTag)
{
	// update the stock pile
 			if(stock == 0)
 			{
				$(stockTag).removeClass("inStock");
				$(stockTag).addClass("outOfStock");
				$(stockTag).text("Out of Stock!!!!");
 			}
 			else if(stock > 0)
 			{
			$(stockTag).removeClass("inStock");
			$(stockTag).removeClass("outOfStock");
			$(stockTag).addClass("inStock");
            $(stockTag).text(stock + " in stock");
 			}
}

// function for cycling through stock labels and getting the result
function getStock(nameToFind)
{
	// append -stock for easier searching
	nameToFind = nameToFind.toLowerCase() + '-stock';
	nameToFind = nameToFind.replace('/', '-');
	var result;

	$('.updateStockPile').each(function()
	{
	  if($(this).attr('id') == nameToFind)
	  {

	  	result = $(this);
	  	// break out of loop to return the correct element
	  	return false;
	  }
	});

	return result;
};

// function for cycling through quantitiy boxes to hide the appropriate one
function disableQuantityBox(nameToFind)
{
	$('.addToBasket').each(function()
	{
	  if($(this).attr('name') == nameToFind)
	  {
	  	$(this).hide();
	  }
	});

};

// function for cycling through quantitiy boxes to set max value
function setMaxForQuantityBox(nameToFind, value)
{
	$('.addToBasket').each(function()
	{
	  if($(this).attr('name') == nameToFind)
	  {
	  	$(this).attr('max', value);
	  }
	});

};

// function for getting number of item in quantity boxes
function itemCounter()
{
	var count = 0;
	$('.addToBasket').each(function()
	{
	  count = count + parseInt($(this).val(), 10);
	});

	return count;
};


// function for getting the cumulative total of all item in cart
function calctotal()
{
	var total = 0;
	$('.itemincart').each(function()
	{
	  total = total + parseFloat($(this).html().substring(1));
	});

	total = total.toFixed(2);
	return total;
};

function goToStore()
{
	$("#mainSection").load("purchase.php");
};
