$(function () {
var amountOfBill = ""
var tipPercent = ""
var totalOfTip = ""
var totalBillIfSplit = ""

$("#add").click(function () {
        amountOfBill = $("#amountOfBill").val();
        tipAmount = $("#tipPercent").find(":selected").val();
        amountInParty = $("#amountInParty").val();
        
          if (amountOfBill === "") {
              window.alert("The Bill Amount Must Be Entered!")
          } else if (tipAmount == 0) {
              window.alert("Please Choose a Tip Percentage")
          } else if (amountInParty === "") {
            window.alert("All fields Must be Entered");

        } else {

            totalOfTip = (amountOfBill * tipAmount).toFixed(2);
            totalTipEach = ((totalOfTip / amountInParty) * 100/100);
            
            totalBillIfSplit = ((amountOfBill / amountInParty) + totalTipEach).toFixed(2);

        var div = $("<div></div>");
                div.append("Total tip altogether is:" + "$" + totalOfTip + "<br />" + "<br />")
                .append("<center>" + "Tip Per Person:" +  "$" + totalTipEach + "</center>" + "<br />")
                .append ("<p>" + "Total Bill per Person:" + "$" + totalBillIfSplit + "</center>" + "<br />" + "</p>")
                $("#showAmounts").append(div);
    
    };

    // $("#showAmounts").val("");

});
});

// STOP










