var delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s); 
    });
};

function gtsLoad() {
    delay(1000).then(function(){
        document.getElementById('gtsP').style.display = "flex";
        document.getElementById('mainP').style.display = "none";
        document.getElementById('mainP').style.top = "10%";
        $('#gtsP > div.text').animate({
            'top': '10%',
            'opacity': '1',
        }, 500, 'easeInQuint');
        return delay();
    }).then(function(){
        $('#gtspic1').animate({
            'width': '45%',
        }, 1500, 'easeInQuint');  
        return delay(1500);
    }).then(function(){
        $('#colorbg').animate({
            'width': '42%',
        }, 1000, 'easeInQuint');
        delay(500);
        $('#gtspic2').animate({
            'width': '42%',
        }, 1500, 'easeInQuint');
        return delay(2000);
    }).then(function(){
        document.getElementById('gtsP').style.top = "-100%";
        delay(1000).then(function(){
            _init();
            mainLoad();
        });
    });
}
  
function mainLoad(){
    delay().then(function(){
        document.getElementById('mainP').style.display = "flex";
        document.getElementById('gtsP').style.top = "10%";
        $('#mpic').animate({
            'width': '50%',
        }, 1500, 'easeInQuint');  
        return delay(1000);
    }).then(function(){
        $('#mainP > div.text').animate({
            'top': '15%',
            'opacity': '1',
        },500);
        return delay(1000); 
    }).then(function(){
        $('#dot').animate({
            'opacity': '0.2',
        },1000);
        $('#mpic2').animate({    
            'width': '15%',
        }, 1000);
        return delay(2000);
    }).then(function(){
        document.getElementById('mainP').style.top = "-100%";
        gtsLoad();
    });
}

function _init(){
    document.getElementById('mpic').style.width = "0%";
    document.querySelector('#mainP > div.text').style.top = "25%";
    document.querySelector('#mainP > div.text').style.opacity = "0";
    document.getElementById('mpic2').style.width = "0%";
    document.querySelector('#gtsP > div.text').style.top = "20%";
    document.querySelector('#gtsP > div.text').style.opacity = "0";
    document.getElementById('gtspic1').style.width = "0%";
    document.getElementById('gtspic2').style.width = "0%";
    document.getElementById('colorbg').style.width = "0%";
}

delay().then(function(){
    $('#menuicon').animate({
        'width': '100%',
    }, 500, 'easeInQuint');  
    return delay(500);
}).then(function(){
    $('#author').animate({
        'opacity': '1',
    }, 500, 'easeInQuint');
    $('#myicon').animate({
        'width': '75%',
    }, 500, 'easeInQuint');
    return delay(500);
}).then(function(){
    $('#navbar').animate({
        'opacity': '1',
    },500, 'easeInQuint');
    return delay(500);
}).then(function(){
    mainLoad();
});






