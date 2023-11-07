$(document).ready(function(){
    $("button").click(function () {
        $("p").toggle(2000, function(){$("span").toggle(2000)});
        
        
      });
    });