document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('backdrop').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('backdrop').style.display = 'none';
});

document.getElementById('backdrop').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('backdrop').style.display = 'none';
});


