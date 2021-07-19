var total1 = 0
var total2 = 0
var total3 = 0
var total4 = 0
console.log("****Available Rider Here*****")

let readlinesync = require("readline-sync")
function Rider_First() {
    let Rider_first_inf = {
        "name" : "smit shende",
        "age" : "29",
        "experience_driving" : "3 yr",
        "cab_no" : "2365",
        "Location" : "Huskur_gate"
    }
    console.log(Rider_first_inf)
}
Rider_First()


function Rider_Second() {
    var Rider_second_inf = { 
    "name" : "sonu bhajipale",
    "age" : "29",
    "experience_driving" : "4 yr",
    "cab_no" : "2365",
    "Location" : "Elctronicity "
    }
    console.log(Rider_second_inf)
}
Rider_Second()



function Rider_Third() {
    var Rider_third_inf = {
        "name" : "bhavesh  meshram",
    "age" : "29",
    "experience_driving" : "7yr",
    "cab_no" : "2365",
    "Location" : "Shiwaji market"
    }
    console.log(Rider_third_inf)
}
Rider_Third()


function Rider_Fourth() {
    var Rider_fourth_inf = {
        "name" : "pranjal sharma",
    "age" : "29",
    "experience_driving" : "5 yr",
    "cab_no" : "2365",
    "Location" : "koremangla "
    }
    console.log(Rider_fourth_inf)
}
Rider_Fourth()

console.log("*********************************************************************************************")

function show(){
    let choose_rider = readlinesync.question("choose rider ---")
    if(choose_rider == "rider1"){
        Rider_First()
        let kilometre = readlinesync.question("choose kilometre ---")
        var amount = 0
        var amount = kilometre * 5
        total1 = total1+ amount
        console.log(total1)
        let choose_again = readlinesync.question("choose again if you want booking/cancel--")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            show();
        }else{
            console.log("finanal cancel")
        }
    }else if(choose_rider =="rider2"){
        Rider_Second()
        let kilometre = readlinesync.question("choose kilometre:  ---")
        var amount = 0
        var amount = kilometre * 5
        total2 = total2 + amount
        console.log(total2)
        let choose_again = readlinesync.question("choose again if you want booking/cancel--")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            show();
        }else{
            console.log("final canceled")
        }
    }else if(choose_rider =="rider3"){
        Rider_Third()
        let kilometre = readlinesync.question("choose kilometre: ---")
        var amount = 0
        var amount = kilometre * 5
        total3 = total3+ amount
        console.log(total3)
        let choose_again = readlinesync.question("choose again if you want booking/cancel---")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            show();
        }else{
            console.log("final canceled")
        }
    }else if(choose_rider == "rider4"){
        Rider_Fourth()
        let kilometre = readlinesync.question("choose kilometre: ---")
        var amount = 0
        var amount = kilometre * 5
        total4 = total4 + amount
        console.log(total4)
        let choose_again = readlinesync.question("choose again if you want booking/cancel--")
        if(choose_again == "booking"){
            Rider_First()
            Rider_Second()
            Rider_Third()
            Rider_Fourth
            show();
        }else{
            console.log("final canceled")
        }
    }
}

let user = readlinesync.question("choose booking or cancel:-");
if(user == "booking"){
    show();
}else{
    console.log("okey canceled")
    let Again_Booking = readlinesync.question("choose again if you want to book --")
    if(Again_Booking == "booking"){
        show();
    }else{
        console.log("Cancelled........")
    }
}

// var showing_amount = readlinesync.question("Do you want to check whole day amount --")
// if("yes" == showing_amount){
//     function amount_checking(){
//         console.log(total1)
//         console.log(total2)
//         console.log(total3)
//         console.log(total4)
//     }
//     amount_checking()
// }else{
//     console.log("!!!!!! It will Stopppp !!!!!")
// }

//#####################################################################################//

var showing_amount = readlinesync.question(" ....Do you want to check amount which rider you want.....")

if(showing_amount == "rider1"){
        Rider_First()
        console.log(" Today's amount", total1)

}else if (showing_amount == "rider2"){
        Rider_Second()
        console.log(" Today's amount",total2)

}else if (showing_amount== "rider3"){
        Rider_Third()
        console.log(" Today's amount", total3)

}else if (showing_amount == "rider4"){
        Rider_Fourth()
        console.log(" Today's amount",total4)
        
}else{
    console.log(" !!!!!!!!!!!!!!!!!!!It will stopp!!!!!!!!!!!!!!!!")


        


    




}
