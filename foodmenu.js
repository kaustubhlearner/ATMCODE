const prompt = require("prompt-sync")();
let bill = 0;

console.log("welcome to Amrik sukdev Hotel");
console.log("choose the day:-");
console.log("monday \ntuesday\nwednesday\nthurusday\nfriday\nsaturady\nsunday");
let day = (prompt("enter the Day:-"))
if (day === "monday") {
    console.log("breakfast\nlunch\ndinner");
    let meal = (prompt("enter the meal time :-"))
    if (meal === "breakfast") {
        console.log(" chana  $120");
        console.log(" oats  $100");
        console.log(" banana_sake $130");

        let item = prompt("enter the item:-")
        if (item === "chana") {
            let plate = prompt("enter the plates:-")
            bill = plate * 120
            console.log(bill);
        }
        if (item === "oats") {
            let plate = prompt("enter the plates:-")
            bill = plate * 100
            console.log(bill);
        }
        if (item === "banana_sake") {
            let plate = prompt("enter the plates:-")
            bill = plate * 130
            console.log(bill);
        }
    }

    else if (meal === "lunch") {
        console.log(" dalchawal  $40");
        console.log(" rice_curry  $50");
        console.log(" kalidal_rice $60");

        let item = prompt("enter the item:-")
        if (item === "dalchawal") {
            let plate = prompt("enter the plates:-")
            bill = plate * 40
            console.log(bill);
        }
        if (item === "rice_curry") {
            let plate = prompt("enter the plates:-")
            bill = plate * 50
            console.log(bill);
        }
        if (item === "kalidal_rice") {
            let plate = prompt("enter the plates:-")
            bill = plate * 60
            console.log(bill);
        }
    }
    else if (meal === "dinner") {
        console.log(" eggfry  $50");
        console.log(" roti_kheer  $70");
        console.log(" roti_paneer $90");

        let item = prompt("enter the item:-")
        if (item === "eggfry") {
            let plate = prompt("enter the plates:-")
            bill = plate * 50
            console.log(bill);
        }
        if (item === "roti_kheer") {
            let plate = prompt("enter the plates:-")
            bill = plate * 70
            console.log(bill);
        }
        if (item === "roti_paneer") {
            let plate = prompt("enter the plates:-")
            bill = plate * 90
            console.log(bill);
        }
    }

    else if (day === "tuesday") {
        let meal = (prompt("enter the meal time :-"))
        if (meal === "breakfast") {
            console.log(" chana  $120");
            console.log(" oats  $100");
            console.log(" banana_sake $130");

            let item = prompt("enter the item:-")
            if (item === "chana") {
                let plate = prompt("enter the plates:-")
                bill = plate * 120
                console.log(bill);
            }
            if (item === "oats") {
                let plate = prompt("enter the plates:-")
                bill = plate * 100
                console.log(bill);
            }
            if (item === "banana_sake") {
                let plate = prompt("enter the plates:-")
                bill = plate * 130
                console.log(bill);
            }
        }
    }
}
