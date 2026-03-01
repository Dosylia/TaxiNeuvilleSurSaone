function showOptions() {
    var taxiRadio = document.getElementById('taxi');
    var taxiOpts = document.getElementById('taxiOptions');
    var vslOpts = document.getElementById('vslOptions');
    if (taxiRadio.checked) {
        taxiOpts.style.display = 'block';
        vslOpts.style.display = 'none';
    } else {
        taxiOpts.style.display = 'none';
        vslOpts.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var taxiRadio = document.getElementById('taxi');
    var vslRadio = document.getElementById('vsl');
    taxiRadio.addEventListener('change', showOptions);
    vslRadio.addEventListener('change', showOptions);

    showOptions();
});
