/* Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.*/
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal;

    // Determine the suffix for the ordinal number
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(`${number}${ordinal}`);
}
