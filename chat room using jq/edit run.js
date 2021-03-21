$(document).ready(function() {
    $("#txtEditor").Editor();
    
    $("#txtEditor").Editor("setText", "Hi");
    /*txt = $("#txtEditor").Editor("getText");*/
    $("#send").click(function(){
        var d=new Date();
        var hou=d.getHours();
        var sec=d.getSeconds();
        var min=d.getMinutes();
        var dat=d.getDate();
        var mon=d.getMonth();
        var year=d.getFullYear();
        var todayDate =hou+':'+min+':'+sec+'-'+ dat+"/"+mon+"/"+year;
        txt = $("#txtEditor").Editor("getText");
    $('#list').append('<li class="list-group-item " id="style">'+todayDate+'<br>'+ txt +'</li>');
    
    });
   
});