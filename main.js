const time_selector = document.querySelector('.time-container');
const date_selector = document.querySelector('.date-container');

const interval = setInterval(updateDateTimeDisplay, 2000);

function updateDateTimeDisplay() {
    const current_date = new Date();

    let time = current_date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    let day_and_date = current_date.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    if (time_selector.textContent !== time) { time_selector.textContent = time; }
    if (date_selector.textContent !== day_and_date) { date_selector.textContent = day_and_date; }

    updateDisplayStyle(current_date);
}

function updateDisplayStyle(current_date) {
    const current_hour = current_date.getHours();
    const background_colors = [
        '#111111', '#333333', '#555555',
        '#777777', '#999999', '#bbbbbb',
        '#cccccc', '#dddddd', '#eeeeee',
        '#ffffff', '#dddddd', '#cccccc',
        '#cccccc', '#bbbbbb', '#aaaaaa',
        '#999999', '#888888', '#777777',
        '#666666', '#555555', '#444444',
        '#333333', '#222222', '#111111',
    ];

    if (current_hour >= 7 && current_hour <= 11) { document.body.style.color = '#000000'; }
    else { document.body.style.color = '#ffffff'; }

    document.body.style.backgroundColor = background_colors[current_hour];
}
