function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createdecemberDays() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let getDaysList = document.querySelector('#days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        
        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            getDaysList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day friday';
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
    };
  };
  createdecemberDays();



function button(buttonName) {
    let getButton = document.querySelector('.buttons-container');
    let createButton = document.createElement('button');
    createButton.id = 'btn-holiday';
    createButton.innerHTML = buttonName;
    getButton.appendChild(createButton);
}  
button('Feriados');

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
displayHolidays();




function createAnotherButton(buttonName) {
    let getButtonFriday = document.querySelector('.buttons-container');
    let createButtonFriday = document.createElement('button');
    createButtonFriday.id = 'btn-friday';
    createButtonFriday.innerHTML = buttonName;
    getButtonFriday.appendChild(createButtonFriday);

}
createAnotherButton('Sexta-Feira');

function displayFriday(sextas) {
    let getFridayButton = document.querySelector('#btn-friday');
    let getFriday = document.querySelectorAll('.friday')
    let newFridayText = 'Hoje é sexta feiraaa!'
  
    getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < getFriday.length; index += 1) {
        if (getFriday[index].innerHTML !==  newFridayText) {
          getFriday[index].innerHTML = newFridayText;
        } else {
          getFriday[index].innerHTML = sextas[index];
        }
      }
    });
  }
let decemberFridays = [4, 11, 18, 25]  
displayFriday(decemberFridays);





function daymouseOver() {
    let dias = document.querySelector('#days');
    dias.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '300px'
    });
}

function daymouseOut() {
    let dias = document.querySelector('#days');
    dias.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontsize = '200px';
    });
}
daymouseOver();
daymouseOut();

function tarefaPersonalizada(tarefa) {
    let tagPai = document.querySelector('.my-tasks');
    let tagFilha = document.createElement('span');
    tagFilha.innerHTML = tarefa;
    tagPai.appendChild(tagFilha);

}
tarefaPersonalizada('Lavar Louça')


function legendaTarefa(cor) {
    let tagPai = document.querySelector('.my-tasks');
    let tagFilha = document.createElement('div');
    tagFilha.className = 'task';
    tagFilha.style.backgroundColor = cor;
    tagPai.appendChild(tagFilha);
}
legendaTarefa('red');


function selecionaTarefa() {
    let taskSelected = document.getElementsByClassName('task selected');
    let mytask = document.querySelector('.task');

    mytask.addEventListener('click', function(event){
        if (taskSelected.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
}
selecionaTarefa();