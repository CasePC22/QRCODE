var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: false });
var labelElement = document.getElementById('myLabel');
var teste = '';

scanner.addListener('scan', function (content) {
    //alert(content);
    teste = content;
    labelElement.textContent = teste;
    //window.location.href=content;
});
Instascan.Camera.getCameras().then(function (cameras) {
    alert(cameras.length);

    if (cameras.length > 0) {
        scanner.start(cameras[0]);
         $('[name="options"]').on('change', function () {
            if ($(this).val() == 1) {
                if (cameras[0] != "") {
                    scanner.start(cameras[0]);
                } else {
                    alert('No Front camera found!');
                }
            } else if ($(this).val() == 2) {
                if (cameras[1] != "") {
                    scanner.start(cameras[1]);
                } else {
                    alert('No Back camera found!');
                }
            } else if ($(this).val() == 3) {
                if (cameras[2] != "") {
                    scanner.start(cameras[2]);
                } else {
                    alert('No Back camera found!');
                }
            } else if ($(this).val() == 4) {
                if (cameras[3] != "") {
                    scanner.start(cameras[3]);
                } else {
                    alert('No Back camera found!');
                }
            } else if ($(this).val() == 5) {
                if (cameras[4] != "") {
                    scanner.start(cameras[4]);
                } else {
                    alert('No Back camera found!');
                }
            }
        
        });
    } else {
        console.error('No cameras found.');
        alert('No cameras found.');
    } 
}).catch(function (e) {
    console.error(e);
    alert(e);
});


/* 
document.getElementById('changeLabelButton').addEventListener('click', function () {
    var labelElement = document.getElementById('myLabel');
    labelElement.textContent = teste;
}); */