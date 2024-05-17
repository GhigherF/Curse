//Липкая шапка
$(function() {
    let header = $('article'),upperHeader=$('header'),color1=$(' article h3'),color2=$('h1');
    let headerHeight = header.height()+upperHeader.height();
     
    $(window).scroll(function() {
        if($(this).scrollTop() > headerHeight) {
            header.css({
            'position':"fixed",
              'background-color': '#CB8A58',
              'transition': '.2s'
            });
            color1.css(
                {   
                    'color':"#e3faf1"
                }
            )
            
            color2.css(
                {
                    'font-weight':"lighter",
                    'color':"#e3faf1"
                }
            )
        } else {
            header.css({
                'transition': '.2s',
                'position':"relative",
                'background-color':"#F0E5DD",
            });

            color1.css(
                {
                    'color':"#B29F91"
                }
            )
            
            color2.css(
                {
                    'color':"#B29F91"
                }
            )
        }
    })});
    //////////////////////////////////////////////////////


//Выпадающая менюшка
$(function()
{
    let menu = $('.drop'),dropMenu=$('.dropdown-content'),exception=$('.except');
    menu.mouseover(function()
    {
        dropMenu.css(
    {
'display':'block'
    });
    }); 

    dropMenu.mouseover(function()
    {
dropMenu.css(
    {
'display':'block'
    });

    }); 

    dropMenu.mouseout(function()
    {
dropMenu.css(
    {
'display':'none'
    });
 }); 

 exception.mouseover(function()
 {
dropMenu.css(
 {
'display':'none'
 });


 });  
    
});
//////////////////////////////////////////////////////////////

//Выпадающее описание


function hover()
{

 $('figure').mouseover(function()
{
    $(this).find('div').css(
        {
    'transition': ".3s",
    'margin-top':"-2rem",
'background-color':"whitesmoke",
'box-shadow':"0 0 1rem  1.2rem whitesmoke"

        }
    );
});  
$('figure').mouseout(function()
{
    $(this).find('div').css(
        {
            'box-shadow':"none",
            'margin-top':"0",
        'transition':".3s",
'background-color':"#F0E5DD"
        }
    );
}
  

);
}
//Сортировка
$(function()
{


    
$('aside button').click(function()
{
    $('body main figure').css({
        'display':"none"
    })
let value=["","","","","","","",""];
let type=["","","","","","","",""];
let i=0;
    $('aside').find('input').each(function()
{ 
    if($(this).is(":checked"))
    {
    value[i]=$(this).attr('category');
        type[i]=$(this).attr('view')
    i+=1;
    }
getClickXML(value,type,i);
})
// $('header').html(value+type);
})   


})


  
   //getXML();
function getClickXML(arg,type,n){
    $.ajax({
        type: "GET", // метод передачи данных
        url: "winter_info.xml", // путь к xml файлу
        dataType: "xml", // тип данных

        success: function(data) {
let gg="";
let j=-1;    
do  
{ 
    j+=1;
    gg+=type[j];

    $(data).find('block').each(function(){
        var id=$(this).find(type[j]).text();
        for(let i=0;i<=n;i++)
        {   
             var check="#"; 
              if(id==arg[i])
        {
            check+=$(this).find('id').text();
            $(check).css(   
                {
                    'display':"block"
                }
                
            )
        } 
        
        }    
      
    
    });
}     
    while(type[j]===type[j+1]);


    


            
           
        }
    });

}




//Инфа для формы
   function GetFullInfo(temp,source)
   {
 

      $.ajax({
        
        type: "GET", // метод передачи данных
        url: "winter_info.xml", // путь к xml файлу
        dataType: "xml", // тип данных
        success: function(data) {
            $(data).find('block').each(function(){ 

               if($(this).find('id').text()===temp) 
               {
                
                var tempr=$(this).find(source).text();

                var descr=$(this).find('description').text();
                var name=$(this).find('name').text();
                var cost=$(this).find('cost').text();
                var color=$(this).find('color').text();
                var material=$(this).find('material').text();
                var sex=$(this).find('sex').text();
                $('.cost').html("Цена:"+cost);
                $('.img img').attr('src',tempr);
                $('.description').html("<h1>"+name+"</h1>"+"<p>"+descr+"</p>"+"<p>"+"Цвет:"+color+"</p>"+"<p>"+"Материал:"+material+"</p>"+"<p>"+"Пол:"+sex+"</p>"+"<p>"+"Цена:"+cost+"</p>"    );
                  }                           
            });         
           
        },
    });
}

//Форма 

$(function()
{
    $('main button').click(function()
    {
        $('body').css({
            'overflow-y': "hidden"
          })
        openSearch();
       var temp=$(this).attr('class');
       let arr=["","_2","_3","_4","_5"];
       let i=0;
       let n=5;
       let source="src";
       GetFullInfo(temp,source);
       
       $('.slider_prev').click(function()
   {
       if((i-1==-1)){i=n-1;}
        else{i=i-1;}
       source="src"+arr[i];
       GetFullInfo(temp,source);
   })
   $('.slider_next').click(function()
   {
       if (i+1==n){i=0;}
       else { i=i+1;} ;
       source="src"+arr[i];
       GetFullInfo(temp,source);
   })

    }
    );

});
function openSearch() {
    $('#myOverlay').css(
        {
         'display':"block"
       })      
  }
  
  // Закрываем поисковую форму
  function closeSearch() {
    $('#myOverlay').css(
        {
            'display':"none"
        }    
    )
    $('body').css({
            'overflow-y': "scroll"
          })
  }

  $(function()
{
    $('#button').click(function()
{
    alert("Заказ выполнен успешно");
})
})




    

        


    //Меню-бургер
    $(function()
{
    let n=0;
    $('.burger').click(function()
{
    n+=1;
    if(n%2==0){ $('.dropdown-content').show(300);}
    
    if(n%2==1){$('.dropdown-content').hide(300);}
    })

})
