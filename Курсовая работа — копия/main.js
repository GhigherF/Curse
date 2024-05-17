
/////////////////////Слайдер
$(function()
    {
        var i=0;
          let arr=["c6","c5","c8"]
        let temp=arr[i];
        n=3;
        gg=setTimeout(()=>good(gg),7000);    
       
        $.ajax({
            type: "GET", // метод передачи данных
            url: "Autumn_info.xml", // путь к xml файлу
            dataType: "xml", // тип данных
            success: function(data) {
                $(data).find('block').each(function(){ 
    
                   if($(this).find('id').text()===temp) 
                   {
                    
                    var tempr=$(this).find('src').text();
                    var descr=$(this).find('description').text();
                    var name=$(this).find('name').text();
                    $('.img img').attr('src',tempr);
                    $('.description').html("<h1>"+name+"</h1>"+"<p>"+descr+"</p>");
                      }                           
                });         
               
            },
        });
        


        
 
        $('.prev').click(function()
    {

        clearTimeout(gg);
        gg=setTimeout(()=>good(),7000);   
        $('.main-overlay').css({
            'opacity':"0",
            'transition':"0.2s"
        })     
     setTimeout(()=>execute1(),200);
       setTimeout(()=>$('.main-overlay').css({
        'opacity':"1",
        'transition':"0.2s"
       }),200);

     if((i-1==-1)){i=n-1;}
     else{i=i-1;}
    temp=arr[i];
function execute1()
{
    $.ajax({
        type: "GET", // метод передачи данных
        url: "Autumn_info.xml", // путь к xml файлу
        dataType: "xml", // тип данных
        success: function(data) {
            $(data).find('block').each(function(){ 

               if($(this).find('id').text()===temp) 
               {
                var tempr=$(this).find('src').text();
                var descr=$(this).find('description').text();
                var name=$(this).find('name').text();
                var cost=$(this).find('cost').text();
                $('.img img').attr('src',tempr);
                $('.description').html("<h1>"+name+"</h1>"+"<p>"+descr+"</p>");
                  }                           
            });         
           
        },
    });
}
}) 
    

     /////////////////////////////////////////////////////
 



///////////////////////////////////////////////////////////

    $('.next').click(good);
        function good()
{    clearTimeout(gg);
   gg=setTimeout(()=>good(),5000);   
    
    $('.main-overlay').css({
        'opacity':"0",
        'transition':"0.2s"
    })
   

 setTimeout(()=>execute2(),200);
   setTimeout(()=>$('.main-overlay').css({
    'opacity':"1",
    'transition':"0.2s"
   }),200);
    
function execute2()
{
    if (i+1==n){i=0;}
    else { i=i+1;} ;
    let temp=arr[i];
    $.ajax({
        type: "GET", // метод передачи данных
        url: "Autumn_info.xml", // путь к xml файлу
        dataType: "xml", // тип данных
        success: function(data) {
            $(data).find('block').each(function(){ 

               if($(this).find('id').text()===temp) 
               {
                var tempr=$(this).find('src').text();
                var descr=$(this).find('description').text();
                var name=$(this).find('name').text();
                var cost=$(this).find('cost').text();
                $('.img img').attr('src',tempr);
                $('.description').html("<h1>"+name+"</h1>"+"<p>"+descr+"</p>"); 
               
                  }                           
            });         
           
        },
    });
}
}
    });