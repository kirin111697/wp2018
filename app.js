var delay = function(s){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,s); 
    });
};
  
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
    $('#mpic').animate({
        'width': '50%',
    }, 1500, 'easeInQuint');  
    return delay(1000);
}).then(function(){
    $('.text').animate({
        'top': '10%',
        'opacity': '1',
    },1000);
    return delay(1000); 
}).then(function(){
    $('#dot').animate({
        'opacity': '0.1',
    },1000);
    $('#mpic2').animate({    
        'width': '15%',
    }, 1000);
});





