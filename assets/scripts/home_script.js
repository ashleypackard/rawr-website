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

  	if(itemCount > 0)
  	{
  		$("#noItems").hide();
  		$("#storeBasket").show();

  		// store the values we need for later purposes
  		var nameOfItem = $(this).attr("name");

  		// replace the -'s with spaces throughout the name
  		nameOfItem = nameOfItem.replace(/-/g, ' ');

  		var itemID = $(this).attr('id');
  		var money = itemID.substring(8);
  		var quantity = $(this).val();
  		var total =  (parseFloat(money) * parseFloat(quantity)).toFixed(2);
  		var found = false;

  		// if the item we just changed was set to zero
  		if(quantity === "0")
  		{
  			// cycle through all the item in the shopping cart to find the correct item to remove
  			$('#storeBasket .removable').each(function()
				{
					if($(this).children(":first-child").html() === nameOfItem)
					{	
						$(this).remove();
					}
				});
  		}
			else //otherwise we want to add the item to the shopping cart
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

 		}
		else // no fish in cart
  	{
			$("#noItems").show();

			$('#storeBasket .removable').each(function()
			{
				$(this).remove();
			});

  		$("#storeBasket").hide();
  	}
  	
	});


});

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