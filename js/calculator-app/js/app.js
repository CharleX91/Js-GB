console.log("hello app Calculator")

function sumar(){
    const form = document.getElementById('form');
    let argumentA = form['argumentA'];
    let argumentB = form['argumentB'];
    let result = parseInt(argumentA.value)+parseInt(argumentB.value);
    if (isNaN(result))
        result = 'Enter a number.';
    document.getElementById('result').innerHTML = `Result: ${result}`;
    console.log(`Result: ${result}`);
}
