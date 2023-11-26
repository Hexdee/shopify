const arrow_up = document.getElementById('setup_guide_arrow_up');
const arrow_down = document.getElementById('setup_guide_arrow_down');

function openSetUpGuide() {
    document.getElementsByClassName('setup_guide_details')[0].classList.remove('removed');
    arrow_down.classList.add('removed');
    arrow_up.classList.remove('removed');
}

function closeSetUpGuide() {
    document.getElementsByClassName('setup_guide_details')[0].classList.add('removed');
    arrow_down.classList.remove('removed');
    arrow_up.classList.add('removed');
}

document.getElementsByClassName('select_plan_alert_close_btn')[0].addEventListener('click', function() {
    document.getElementsByClassName('select_plan_alert')[0].classList.add('hidden')
});


arrow_up.addEventListener('click', function(e) {
    e.stopPropagation();
    closeSetUpGuide();
});

arrow_down.addEventListener('click', function(e) {
    e.stopPropagation();
    openSetUpGuide();
});

document.getElementById('alert_icon').addEventListener('click', function() {
    document.getElementsByClassName('alert_dropdown_container')[0].classList.remove('removed');
})

document.getElementsByClassName('alert_dropdown')[0].addEventListener('click', function(e) {
    e.stopPropagation();
});

document.getElementsByClassName('alert_dropdown_container')[0].addEventListener('click', function(e) {
    document.getElementsByClassName('alert_dropdown_container')[0].classList.add('removed');
});
