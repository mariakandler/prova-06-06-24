
function calculateAvg(grade1, grade2) {
    const average = (parseFloat(grade1) + parseFloat(grade2)) / 2.0;
    return average;
}; 

function send() {
    const name = document.getElementById('name').value;
    const register = document.getElementById('register').value;
    const gradeOne = parseFloat(document.getElementById('gradeOne').value);
    const gradeTwo = parseFloat(document.getElementById('gradeTwo').value);  
    const table = document.getElementById('finalTable');

    const newRow = document.createElement('tr');

    const nameRow = document.createElement('td');
    nameRow.innerHTML = name;
    const registerRow = document.createElement('td');
    registerRow.innerHTML = register;
    const gradeOneRow = document.createElement('td'); 
    gradeOneRow.innerHTML = gradeOne;
    const gradeTwoRow = document.createElement('td');
    gradeTwoRow.innerHTML = gradeTwo;
    const averageRow = document.createElement('td');
    averageRow.innerHTML = calculateAvg(gradeOne, gradeTwo); 
    const situationRow = document.createElement('td');

    if (parseFloat(averageRow.innerHTML) >= 5) {
        situationRow.innerHTML = 'Aprovado';
    } else {
        situationRow.innerHTML = 'Reprovado';
    }

    table.append(newRow);
    newRow.append(nameRow, registerRow, gradeOneRow, gradeTwoRow, averageRow, situationRow);

    document.getElementById('name').value = '';
    document.getElementById('register').value = '';
    document.getElementById('gradeOne').value = '';
    document.getElementById('gradeTwo').value = '';
}




