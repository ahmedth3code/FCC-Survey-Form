var radioLabel = document.querySelectorAll('.radio-label');
var radioButton = document.querySelectorAll('.radio-button');

radioLabel.forEach(function(label, x) {
    label.addEventListener('click', function() {        
        radioLabel.forEach(function(lab, y) {
            if (y != x) {
                lab.classList.remove('custom-radio');
            }
        label.classList.add('custom-radio')
        });

    });
});