var totalMoney = 10000;
var ticketPrice = 800;
var childrenAge = 7;
var isStudent = true;
var oldAge = 62;

// free ticket
if(7<10){
    console.log("Free ticket")
}
// 15% discount
if (62>=60) {
    var discount1= ticketPrice *15/100;
    var payableAmount1 = ticketPrice - discount1
    console.log(payableAmount1)
}
// 50%discount
if (isStudent = true){
        var discount2= ticketPrice *50/100;
        var payableAmount2 = ticketPrice-discount2
        console.log(payableAmount2);
    }
// regular price
    
if(ticketPrice=800){
    console.log("Regular Price 800")
}