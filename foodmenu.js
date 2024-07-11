const prompt = require("prompt-sync")();
// let bill = 0;

// console.log("welcome to Amrik sukdev Hotel");
// console.log("choose the day:-")
// console.log("1.Monday \n2.Tuesday\n3.Wednesday\n4.Thurusday\n5.Friday\n6.Saturady\n7.Sunday");
// let day = (prompt("enter the Day:-"))
// day = day.toLowerCase()
// if (day == 1 || day === "monday") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.chana  $120\n2.oats  $100\n3.1banana_sake $130");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if (item==1|| item === "chana") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 120
//             console.log(bill);
//         }
//         if (item==2||item === "oats") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 100
//             console.log(bill);
//         }
//         if ( item==3||item === "banana_sake") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 130
//             console.log(bill);
//         }
//     }

//     else if (meal == 2 || meal === "lunch") {
//         console.log(" dalchawal  $40\n2.rice_curry  $50\n3. kalidal_rice $60")
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1||item === "dalchawal") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//         if ( item==2||item === "rice_curry") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item==3||item === "kalidal_rice") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 60
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.eggfry $50\n2.roti_kheer $70\n3.roti_paneer $90");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if (item==1||item === "eggfry") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if (item==2||item === "roti_kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 70
//             console.log(bill);
//         }
//         if (item==3||item === "roti_paneer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 90
//             console.log(bill);
//         }
//     }
// }
// else if (day == 2 || day === "tuesday") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.eatly  $20\n2.dalia  $30\n3.kheer  $10");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "eatly") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 20
//             console.log(bill);
//         }
//         if ( item==2||item === "dalia") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//         if ( item==3||item === "kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 10
//             console.log(bill);
//         }
//     }
//     else if (meal == 2 || meal === "lunch") {
//         console.log("1.dalmakhani  $40 \n2.sabzichawal  $50\n3.kalidal_rice  $60");
//           let item = prompt("enter the item:-")
//           item=item.toLowerCase()
//         if ( item ==1|| item === "sabzichawal") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//         if ( item ==2|| item === "rice_curry") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item==3||item === "kalidal_rice") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 60
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.eggfry  $50\n2.roti_kheer  $70\n3.roti_paneer  $90");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "eggfry") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item ==2||item === "roti_kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 70
//             console.log(bill);
//         }
//         if ( item==3|| item === "roti_paneer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 90
//             console.log(bill);
//         }
//     }
// }
// else if (day == 3 || day === "wednesday") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.halwa  $20\n2.kheer  $30\n3.bread  $10");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "halwa") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 20
//             console.log(bill);
//         }
//         if ( item==2||item === "kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//         if ( item==3||item === "bread") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 10
//             console.log(bill);
//         }
//     }
//     else if (meal == 2 || meal === "lunch") {
//         console.log("1.kadhichwal  $25 \n2.egg_roti $50\n3.khicdi  $40");
//           let item = prompt("enter the item:-")
//           item=item.toLowerCase()
//         if ( item ==1|| item === "kadhichwal") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 25
//             console.log(bill);
//         }
//         if ( item ==2|| item === "egg_roti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item==3||item === "khicdi") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.vegroti  $50\n2.roti_kheer  $65\n3.roti_paneer  $50");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "vegroti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item ==2||item === "roti_kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 65
//             console.log(bill);
//         }
//         if ( item==3|| item === "roti_paneer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//     }
// }
// else if (day == 4 || day === "thursay") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.cutlet  $40\n2.friedrice   $25\n3.biryani  $30");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "cutlet") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//         if ( item==2||item === "friedrice") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//         if ( item==3||item === "biryani") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//     }
//     else if (meal == 2 || meal === "lunch") {
//         console.log("1.kadhichwal  $25 \n2.egg_roti $50\n3.khicdi  $40");
//           let item = prompt("enter the item:-")
//           item=item.toLowerCase()
//         if ( item ==1|| item === "kadhichwal") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 25
//             console.log(bill);
//         }
//         if ( item ==2|| item === "egg_roti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item==3||item === "khicdi") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.vegroti  $50\n2.roti_kheer  $65\n3.roti_paneer  $50");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "vegroti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item ==2||item === "roti_kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 65
//             console.log(bill);
//         }
//         if ( item==3|| item === "roti_paneer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//     }
// }

// else if (day == 5 || day === "friday") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.cutlet  $40\n2.friedrice   $25\n3.biryani  $30");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "cutlet") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//         if ( item==2||item === "friedrice") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//         if ( item==3||item === "biryani") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//     }
//     else if (meal == 2 || meal === "lunch") {
//         console.log("1.kadhichwal  $25 \n2.egg_roti $50\n3.khicdi  $40");
//           let item = prompt("enter the item:-")
//           item=item.toLowerCase()
//         if ( item ==1|| item === "kadhichwal") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 25
//             console.log(bill);
//         }
//         if ( item ==2|| item === "egg_roti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item==3||item === "khicdi") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.vegroti  $50\n2.roti_kheer  $65\n3.roti_paneer  $50");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "vegroti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item ==2||item === "roti_kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 65
//             console.log(bill);
//         }
//         if ( item==3|| item === "roti_paneer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//     }
// }

// else if (day == 6 || day === "saturday") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.poha  $20\n2.biryani   $25\n3.nonvegbiryani  $70");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "cutlet") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//         if ( item==2||item === "biryani") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//         if ( item==3||item === "nonvegbiryani") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 70
//             console.log(bill);
//         }
//     }
//     else if (meal == 2 || meal === "lunch") {
//         console.log("1.redmasoor  $25 \n2.egg_roti $50\n3.roti_dal  $40");
//           let item = prompt("enter the item:-")
//           item=item.toLowerCase()
//         if ( item ==1|| item === "redmasoor") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 25
//             console.log(bill);
//         }
//         if ( item ==2|| item === "egg_roti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item==3||item === "roti_dal") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.vegroti  $50\n2.roti_kheer  $65\n3.roti_paneer  $50");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "vegroti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item ==2||item === "roti_kheer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 65
//             console.log(bill);
//         }
//         if ( item==3|| item === "roti_paneer") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//     }
// }
// else if (day == 7 || day === "sunday") {
//     console.log("1.Breakfast\n2.Lunch\n3.Dinner");
//     let meal = (prompt("enter the meal time :-"))
//     meal = meal.toLowerCase()
//     if (meal == 1 || meal === "breakfast") {
//         console.log("1.halwa  $20\n2.pulaw   $25\n3.omelate  $70");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "halwa") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//         if ( item==2||item === "pulaw") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 30
//             console.log(bill);
//         }
//         if ( item==3||item === "omelate") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 70
//             console.log(bill);
//         }
//     }
//     else if (meal == 2 || meal === "lunch") {
//         console.log("1.roti_sabzi  $35 \n2.shahi_panner $70\n3.buttterchicken  $40");
//           let item = prompt("enter the item:-")
//           item=item.toLowerCase()
//         if ( item ==1|| item === "roti_sabzi") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 35
//             console.log(bill);
//         }
//         if ( item ==2|| item === "shahi_panner") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 70
//             console.log(bill);
//         }
//         if ( item==3||item === "buttterchicken") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 40
//             console.log(bill);
//         }
//     }
//     else if (meal == 3 || meal === "dinner") {
//         console.log("1.vegroti  $50\n2.egg_rice  $65\n3.chicken_roti  $150");
//         let item = prompt("enter the item:-")
//         item=item.toLowerCase()
//         if ( item ==1|| item === "vegroti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 50
//             console.log(bill);
//         }
//         if ( item ==2||item === "egg_rice") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 65
//             console.log(bill);
//         }
//         if ( item==3|| item === "chicken_roti") {
//             let plate = prompt("enter the plates:-")
//             bill = plate * 150
//             console.log(bill);
//         }
//     }
// }



// let a=5;
// console.log(5e3);

let unit = Number(prompt("enter the number"))
let bill=0;
let totalbill=0;
if(unit<=50){
    bill=unit*0.50
    k=(bill*20)/100
    totalbill=bill+k
}
else if(unit<=150){
    bill=50*0.50+(unit-50*0.75)
    k=(bill*20)/100
    totalbill=bill+k
}
else if(unit<=250){
    bill=50*0.50+100*0.75+(unit-150)*1.20
    k=(bill*20)/100
    totalbill=bill+k
}
else if (unit>250){
    bill=50*0.50+100*0.75+100*1.20(unit-250)*1.50
    k=(bill*20)/100
    totalbill=bill+k
}
console.log(totalbill);