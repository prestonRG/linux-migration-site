document.addEventListener('DOMContentLoaded', function () {
    const helpButton = document.querySelector('.help-button');
    if (helpButton) {
        helpButton.addEventListener('click', function () {
            alert('You clicked the help button! More info coming soon.');
        });
    }
});