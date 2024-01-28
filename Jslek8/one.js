let talArray = [1,2,3,4,5,6,7,8,9];
let maxTal = talArray[0];
let i = 1;
while (i < talArray.length) {
    if (talArray[i] > maxTal) {
        maxTal = talArray[i];
    }
    i++;
}
document.write("Max talet från vår array är:" + maxTal);

/* method join */

const fruits = ["banana", "orange", "apple", "mango"];
document.getElementById("join_id").innerHTML = fruits.join(" * ");