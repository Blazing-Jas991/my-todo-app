import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    isBefore,
    isAfter,
    startOfDay,
    getDay,
} from 'date-fns';

let currentMonth = new Date();
let selectedDate = null;
let selectedButton = null;

let hours = 0;
let minutes = 0;

const minutePicker = document.getElementById('minute-picker');
minutePicker.textContent = minutes;
const hourPicker = document.getElementById('hour-picker');
hourPicker.textContent = hours;

const dateHeader = document.getElementById('month-displayer');
const weekDaysContainer = document.getElementById('days-container');
const prevBtn = document.getElementById('prev-arrow');
const nextBtn = document.getElementById('next-arrow');
export const dateBtn = document.getElementById('date-button');
const dateDialog = document.getElementById('date-dialog');
export const dateBtnText = dateBtn.textContent;

function renderCalendar () {
    weekDaysContainer.replaceChildren();

    let firstDay = startOfMonth(currentMonth);
    let lastDay = endOfMonth(currentMonth);
    let weekDay = eachDayOfInterval({ start: firstDay, end: lastDay });
    let startingDay = (getDay(firstDay) + 6) % 7;

    for (let i = 0; i < startingDay; i++) {
        const emptySpace = document.createElement('div');
        weekDaysContainer.append(emptySpace);
    }

    dateHeader.textContent = format(currentMonth, 'MMMM yyyy');

    for (const days of weekDay) {
        const dayButton = document.createElement('button');
        dayButton.textContent = format(days, 'd');
        weekDaysContainer.append(dayButton);

        if (isBefore(days, startOfDay(new Date()))) {
            dayButton.disabled = true;
        }

        dayButton.addEventListener('click', () => {
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }

            dateBtn.textContent = format(days, 'eee, MMM dd, yyyy');

            dayButton.classList.add('selected');
            selectedButton = dayButton;
            selectedDate = days;
            dateDialog.close();
        });
    };
};

export function hourUpController () {
    if(hours < 23) {
        hours++;
    } else {
        hours = 0;
    };
}

export function hourDownController () {
    if(hours < 23) {
        hours--;
    } else {
        hours = 0;
    };
}

export function minuteUpController () {
    if (minutes < 59) {
        minutes++;
    } else {
        minutes = 0;
    }
}

export function minuteDownController () {
    if (minutes < 59) {
        minutes--;
    } else {
        minutes = 0;
    }
}


function previousMonth () {
    currentMonth = subMonths(currentMonth, 1);
    renderCalendar();
};

function nextMonth () {
    currentMonth = addMonths(currentMonth, 1);
    renderCalendar();
}

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nextMonth();
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    previousMonth(); 
});

dateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentMonth = new Date();
    renderCalendar();
    dateDialog.showModal();
});

export function getSelectedDate () {
    return selectedDate;
};






renderCalendar();
