<div class="col-md-10">
	<div id="alert_placeholder"></div>
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
			<td><input type="text" id="bill_phone" placeholder="xxxxxxxxxx" maxlength="10"></input></td>
		</tr>
		<tr>
			<td>State: </td>
			<td><input type="text" id="bill_state" maxlength="2"></input></td>
			<td>Email: </td>
			<td><input type="text" id="bill_email"></input></td>
		</tr>
		<tr>
			<td>Zip: </td>
			<td><input type="text" id="bill_zip" maxlength="5"></input></td>
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
			<td><input type="text" id="ship_phone" placeholder="xxxxxxxxxx" maxlength="10"></input></td>
		</tr>
		<tr>
			<td>Zip: </td>
			<td><input type="text" id="ship_zip" maxlength="5"></input></td>
		</tr>
	</table><br>
	</div>
	<h1>Payment Information</h1><hr>
	<table id="payment">
		<tr>
			<td>Card Type:</td>
			<td id="cardType">
				<select>
					<option value = "Visa">Visa</option>
					<option value = "Mastercard">Mastercard</option>
					<option value = "AmericanExp">American Express</option>
					<option value = "Discover">Discover Card</option>
				</select>
			</td>
			<td>Name:</td><td><input type="text" id="card_name"></input></td>
		</tr>
		<tr>
			<td>Card #:</td><td><input type="text" id="card_num" placeholder="xxxxxxxxxxxxxxxx" maxlength="16"></input></td>
			<td>Security #:</td><td><input type="text" id="sec_num" placeholder="xxxxxxxxx" maxlength="9"></input></td>
		</tr>
		<tr>
			<td>Expiration Date:</td><td><input type="text" id="exp" placeholder="xx/xx" maxlength="5"></input></td>
		</tr>
		<tr id="formButtons">
			<td colspan="2"><button type="submit" onClick="validateCheckout()">Submit</button></td>
			<td colspan="2"><button type="cancel" onClick="cancelCheckout()">Cancel</button></td>
		</tr>
	</table>
</div>