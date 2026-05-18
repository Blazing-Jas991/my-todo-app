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

const dateHeader = document.getElementById('month-displayer');
const weekDaysContainer = document.getElementById('days-container');
const prevBtn = document.getElementById('prev-arrow');
const nextBtn = document.getElementById('next-arrow');
const dateBtn = document.getElementById('date-button');
const dateDialog = document.getElementById('date-dialog');

function renderCalendar () {
    weekDaysContainer.replaceChildren();

    let firstDay = startOfMonth(currentMonth);
    let lastDay = endOfMonth(currentMonth);
    let weekDay = eachDayOfInterval({ start: firstDay, end: lastDay });
    let startingDay = (getDay(firstDay) + 6) % 7;

    for (let i = 0; i < startingDay; i++) {
        let i = document.createElement('div');
        weekDaysContainer.append(i);
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
            dayButton.classList.add('selected');
            selectedButton = dayButton;
            selectedDate = days;
            dateDialog.close();
            console.log(days);
            console.log(selectedButton);
        })
    }
};

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
    dateDialog.showModal();
});

export function getSelectedDate () {
    return selectedDate;
};










renderCalendar();
