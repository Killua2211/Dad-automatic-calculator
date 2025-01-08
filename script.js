function calculateResult() {
    try {
        // Get input values
        const weight = parseFloat(document.getElementById("weight").value);
        const classNum = parseFloat(document.getElementById("classNum").value);
        const firstFactor = parseFloat(document.getElementById("firstFactor").value);
        const secondFactor = parseFloat(document.getElementById("secondFactor").value);

        // Validate inputs
        if (isNaN(weight) || isNaN(classNum) || isNaN(firstFactor) || isNaN(secondFactor)) {
            throw new Error("Invalid input. Please enter valid numbers.");
        }

        // Perform calculations
        const classWeight = weight * classNum;
        const afterNumber = firstFactor * secondFactor;
        const finalResult = classWeight + afterNumber;

        // Display results
        document.getElementById("classWeightResult").textContent = classWeight.toFixed(2);
        document.getElementById("afterNumberResult").textContent = afterNumber.toFixed(2);
        document.getElementById("finalResult").textContent = finalResult.toFixed(2);
    } catch (error) {
        alert(error.message); // Show error message if input is invalid
    }
}