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
		$("#btnCheckout").show();

  		// replace the -'s with spaces throughout the name
  		nameOfItem = nameOfItem.replace(/-/g, ' ');
		
  		var itemID = $(this).attr('id');
		var category = itemID.substr(0, itemID.indexOf("-"));
		
  		
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
					var htmltoadd = "<tr class='removable'><td class='itemname'>" + nameOfItem + "</td><td>" + category + "</td><td>$" + money + 
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
			$("#btnCheckout").hide();

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
    	$('#'+manipulatedKey).attr('class', 'outOfStock');
			$('#'+manipulatedKey).html('Out of Stock!');

			// search through all items with class 'addToBasket' and find the input box thathas matching name and hide
			disableQuantityBox(key);
    }
    else
    {
    	setMaxForQuantityBox(key, value);
    	$('#'+manipulatedKey).html(value + ' in stock');
    }
  
	});

}

// function for updating Stock tags
function updateStockTags(stock, stockTag)
{
	// update the stock pile
 			if(stock == 0)
 			{
				stockTag.attr('class', 'outOfStock');
				stockTag.html('Out of Stock!');
 			}
 			else
 			{
 				stockTag.html(stock + " in stock");
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

function CheckoutForm()
{
	//check database
	$('#bigDiv').load("checkout.php");
	$('#btnCheckout').toggle();
}

function hideshipping()
{
	$('#Shipping').toggle();
}

function cancelCheckout()
{
	if (confirm("Are you sure you want to cancel your order?"))
	{
		$("#mainSection").load("purchase.php");
	}
	else
	{
		
	}
}

function validateCheckout()
{
	var b_fname = $("#bill_fname").val();
	var b_lname = $("#bill_lname").val();
	var b_street = $("#bill_street").val();
	var b_phone = $("#bill_phone").val();
	var b_state = $("#bill_state").val();
	var b_email = $("#bill_email").val();
	var b_zip = $("#bill_zip").val();
	var b_zip_num = isNaN(b_zip);
	var b_phone_num = isNaN(b_phone);
	
	// Check to make sure nothing is left blank
	if (b_fname == "" || b_lname == "" || b_street == "" || b_phone == "" || b_state == "" || b_email == "" || b_zip == "")
	{
		var message = "Error! All fields in the billing section must be filled out.";
		$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
		return;
	}
	else if(b_zip_num == true)
	{
		var message = "Error! Bad zip code in the billing section.";
		$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
		return;
	}
	else if(b_phone_num == true)
	{
		var message = "Error! Bad phone number in your billing section.";
		$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
		return;
	}
	
	// See  if billing and shipping are the same information, if not validate
	if (!$("#ship_and_bill").prop('checked')) {
		var s_fname = $("#ship_fname").val();
		var s_lname = $("#ship_lname").val();
		var s_street = $("#ship_street").val();
		var s_phone = $("#ship_phone").val();
		var s_state = $("#ship_state").val();
		var s_email = $("#ship_email").val();
		var s_zip = $("#ship_zip").val();
		var phone_num = isNaN(s_phone);
		var zip_num = isNaN(s_zip);
		
		if (s_fname == "" || s_lname == "" || s_street == "" || s_phone == "" || s_state == "" || s_email == "" || s_zip == "")
		{
			var message = "Error! All fields in the shipping section must be filled out.";
			$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
			return;
		}
		else if(phone_num == true)
		{
			var message = "Error! Bad phone number in your shipping information.";
			$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
			return;
		}
		else if(zip_num == true)
		{
			var message = "Error! Bad zip code in the shipping section.";
			$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
			return;
		}
	}
	
	// Check Payment option
	var c_name = $("#card_name").val();
	var c_num = $("#card_num").val();
	var c_sec = $("#sec_num").val();
	var c_exp = $("#exp").val();
	var exp_num = isNaN(c_exp);
	var sec_num = isNaN(c_sec);
	var cnum_num = isNaN(c_num);
	
	if(c_name == "" || c_num == "" || c_sec == "" || c_exp == "") 
	{
		var message = "Error! All payment fields must be filled out.";
		$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
		return;
	}
	else if(sec_num == true)
	{
		var message = "Error! Bad credit card security number.";
		$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
		return;
	}
	else if(cnum_num == true)
	{
		var message = "Error! Bad credit card number.";
		$('#alert_placeholder').html('<div class="alert alert-danger">' + message + '</div>');
		return;
	}
	
	//Output thank you and reload store
	var message = "Thank you for placing your order!";
	$('#alert_placeholder').html('<div class="alert alert-success">' + message + '</div>');
	//var table = "<table>" + $("#storeBasket").html() + "</table>";
	var category, item_name, itemCount;
	
	var myRows = [];
	var headersText = [];
	var $headers = $("th");

	// Loop through grabbing everything
	var $rows = $("#basketBody tr");
	var totalRows = $rows.length;
	for (var rowIndex = 0; rowIndex < totalRows; ++rowIndex) {
		var currentRow = $($rows[rowIndex]);
		var $cells = currentRow.find("td");
		myRows[rowIndex] = {};
		var totalCells = $cells.length;

		for (var cellIndex = 0; cellIndex < totalCells; ++cellIndex) {
			var currentCell = $($cells[cellIndex]);
			// Set the header text
			if(headersText[cellIndex] === undefined) {
				headersText[cellIndex] = $($headers[cellIndex]).text();
			}
			// Update the row object with the header/cell combo
			myRows[rowIndex][headersText[cellIndex]] = currentCell.text();
			if (headersText[cellIndex] == "Item")
			{
				item_name = currentCell.text();
			}
			else if (headersText[cellIndex] == "Category")
			{
				category = currentCell.text();

				if (category.substr(0,4) == "toys")
				{
				category = "toys";
				}
				else if (category.substring(0,9) == "nutrition")
				{
				category = "nutrition";
				}
				else if (category.substr(0,3) == "egg")
				{
				category = "egg-kits";
				}
			}
			else if (headersText[cellIndex] == "Quantity")
			{
				itemCount = currentCell.text();
			}
			else if (currentCell.text() == "Total:")
			{

			}

		}    

		$.ajax({ 
			url: '../assets/scripts/checkoutUpdate.php',
			data: "category="+category+"&item_name="+item_name+"&quantity="+itemCount,
			type: 'POST',
			success: function(data) {
			if(data.success)
			{

			}
			},
			error: function(){
				console.log("Error! Could not connect to database.");
			}
		});
	}

	// Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
	var myObj = {
	"myrows": myRows
	};
	
}