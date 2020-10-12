'use strict';

let calc = () => {

    let grades = [];

    Array.from(document.getElementById('values').children).forEach( child => {
        let grade = {};
        grade.grade = +child.querySelector(".grade").value;
        grade.weight = +child.querySelector(".weight").value;
        grades.push(grade);
    })

    let totalGrades = 0;
    let totalWeight = 0;
    grades.forEach(grade => {
        totalGrades += grade.grade * grade.weight;
        totalWeight += grade.weight;
    });

    result = totalGrades / totalWeight;

    document.querySelector('#result').setAttribute('style', '');
    document.querySelector('#result span').innerText = result.toFixed(2);
}

let add = () => {
    let template = `

        <div class="input-container input-grade"><input class="grade" name="grade"></input></div>
        <div class="input-container input-weight"><input class="weight" name="weight"></input></div>

    `;

    let element = document.createElement('div');
    element.className = 'value';
    element.innerHTML = template;

    document.querySelector("#values").appendChild(element);
}

document.getElementById("add").addEventListener('click', () => {
    add();
});

document.getElementById("calc").addEventListener('click', () => {
    calc();
});

add();
