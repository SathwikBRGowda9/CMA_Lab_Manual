/*4. Write a javascript program that converts temperatures to and from Celsius and
Fahrenheit,*/const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the temperature (e.g., 25C, 77F): ', (value) => {
    value = value.trim();

    if (!value || value.length < 2) {
        console.log('Invalid input. Please enter a valid temperature with the scale (C or F).');
        rl.close();
        return;
    }

    const temp = parseFloat(value.slice(0, -1));
    const scale = value.slice(-1).toUpperCase();

    if (isNaN(temp) || (scale !== 'C' && scale !== 'F')) {
        console.log('Invalid input. Please enter a valid temperature with the scale (C or F).');
    } else {
        if (scale === 'C') {
            console.log(`${temp}C is ${((temp * 9/5) + 32).toFixed(2)}F`);
        } else {
            console.log(`${temp}F is ${((temp - 32) * 5/9).toFixed(2)}C`);
        }
    }

    rl.close();
});

