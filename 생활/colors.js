var Links = {
    setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color',color);
}
}
var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}
//코드를 효율적으로 바꾸는 걸 리팩토링이라고 함
function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('gold');

    } else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
    }
}