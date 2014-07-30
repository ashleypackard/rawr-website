<div class="col-md-10">
	<h1>Billing Information</h1><br/><hr>
	<!--list items in basket-->
	<table id="billing">
		<tr>
			<td>First Name: </td>
			<td><input type="text" id="bill_fname"></input></td>
			<td>Last Name: </td>
			<td><input type="text" id="bill_lname"></input></td>
		</tr>
		<tr>
			<td>Street: </td>
			<td><input type="text" id="bill_street"></input></td>
			<td>Telephone: </td>
			<td><input type="text" id="bill_phone"></input></td>
		</tr>
		<tr>
			<td>State: </td>
			<td><input type="text" id="bill_state"></input></td>
			<td>Email: </td>
			<td><input type="text" id="bill_email"></input></td>
		</tr>
		<tr>
			<td>Zip: </td>
			<td><input type="text" id="bill_zip"></input></td>
		</tr>
	</table><br/>	
	<input type="checkbox" name="shipping" id="ship_and_bill" onClick="hideshipping()"></input> Check this box if your shipping information and your billing information are the same.<br/>
	<div id="Shipping">
	<h1>Shipping Information</h1><hr>
	
	<table>
		<tr>
			<td>First Name: </td>
			<td><input type="text" id="ship_fname"></input></td>
			<td>Last Name: </td>
			<td><input type="text" id="ship_lname"></input></td>
		</tr>
		<tr>
			<td>Street: </td>
			<td><input type="text" id="ship_street"></input></td>
			<td>Telephone: </td>
			<td><input type="text" id="ship_phone"></input></td>
		</tr>
		<tr>
			<td>Zip: </td>
			<td><input type="text" id="ship_zip"></input></td>
		</tr>
	</table><br>
	</div>
	<h1>Payment Information</h1><hr>
	<table id="payment">
		<tr>
			<td>Card Type:</td><td><select>
					<option value = "Visa">Visa</option>
					<option value = "Mastercard">Mastercard</option>
					<option value = "AmericanExp">American Express</option>
					<option value = "Discover">Discover Card</option>
				</select>
			</td>
			<td>Name:</td><td><input type="text" id="card_name"></input></td>
		</tr>
		<tr>
			<td>Card #:</td><td><input type="text" id="card_num"></input></td>
			<td>Security #:</td><td><input type="text" id="sec_num"></input></td>
		</tr>
		<tr>
			<td>Expiration Date:</td><td><input type="text" id="exp"></input></td>
		</tr>
		<tr>
			<td><button type="submit" onClick="validateCheckout()">Submit</button></td>
			<td><button type="cancel" onClick="cancelCheckout()">Cancel</button></td>
		</tr>
	</table>
	<div id="alert_placeholder"></div>
</div>