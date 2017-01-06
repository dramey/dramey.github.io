$(function () {

// I am declaring my variables
var amountOfBill = ""
var tipPercent = ""
var totalOfTip = ""
var totalBillIfSplit = ""
// This is my calculate on the click of my calculate button
$("#add").click(function () {
        amountOfBill = $("#amountOfBill").val();
        tipAmount = $("#tipPercent").find(":selected").val();
        amountInParty = $("#amountInParty").val();

        if(amountOfBill.toString().length > 6){
    window.alert("Please Enter a Valid Amount of Your Bill");
    return;
        }
        // these if/else statements will check to see if certain things apply before continuing on through
          if (amountOfBill === "") {
              window.alert("The Bill Amount Must Be Entered!")
          } else if (tipAmount == 0) {
              window.alert("Please Choose a Tip Percentage")
          } else if (amountInParty === "") {
            window.alert("All fields Must be Entered");

        } else {
// The below will do math if the above have all been 
            totalOfTip = (amountOfBill * tipAmount).toFixed(2);
            totalTipEach = ((totalOfTip / amountInParty) * 100/100);
            
            totalBillIfSplit = ((amountOfBill / amountInParty) + totalTipEach).toFixed(2);

        var div = $("<div></div>");
                div.append("Total tip altogether is:" + "$" + totalOfTip + "<br />" + "<br />")
                .append("<center>" + "Tip Per Person:" +  "$" + totalTipEach + "</center>" + "<br />")
                .append ("<p>" + "Total Bill per Person:" + "$" + totalBillIfSplit + "</center>" + "<br />" + "</p>")
                $("#showAmounts").append(div);
                
    
    };
    // this clears my page on click of my clear button
$("#zeroOut").click(function () {
    location.reload();

   
});
});
});












