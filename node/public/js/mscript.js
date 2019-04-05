$( document ).ready(function() {  
    $("#search").on('click',function(){
        var ajaxUrl = '/login/search';
        var key = $("#searchKey").val(); 
        $.ajax({
            type: 'POST', 
            data: 'key='+key,
            url: ajaxUrl,
            cache: false,
            processData: false, 
             
            success: function(data)
            { 
               console.log(data);
            }
        });
    });
})