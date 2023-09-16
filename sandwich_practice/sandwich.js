// let bread = "wheat";
// let protein = ["london broil", "bacon"];
// let cheeses = ["provolone", "pepperjack"];
// let condiments = ["aragula", "tomatoes", "mayo"];

// interface Sandwich {
//     bread: string;
//     proteins: string[];
//     chesses: string[];
//     condiments:string[];
//     display: () => void;
// }




let sandwich = {
    bread: "wheat",
    proteins: ["london broil", "bacon"],
    chesses: ["provolone", "pepperjack"],
    condiments: ["aragula", "tomatoes", "mayo"],
    display: function () {
        console.log(`The bread is:       ${this.bread}`)
        console.log(`The rptoeins are:   ${this.proteins}`)
        console.log(`The chesses is:     ${this.chesses}`)
        console.log(`The condiments are: ${this.condiments}`)
    }
};

console.log()
sandwich.display()