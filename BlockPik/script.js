$(document).ready(function(){
    var previous='#ffffff'
   function createRandBlock(z){
       var block=$("<pp></pp>");
       
       var w = 0 //Math.floor(Math.random() * 100 + 10);
       var h = 0 //Math.floor(Math.random() * 100 + 10);
       var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
       var newColor1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
       block.css({
		   'vertical-align':'top',
           'width':w+"px",
           'height':h+"px",
           'margin':'35px',
           'display':'inline-block',
           'border-radius':'0px',
           'background-color':'#000000',
           'position':'relative',
           'z-index':z,
		   'padding':'3px'
       }); 
       block.hide()
       block.appendTo("#cont2");
       block.animate({'height':'70px','width':'70px','margin':'0px'},1000,'easeOutBounce')
	   setTimeout(function(){block.animate({'background-color':newColor,'border-radius':'10px'},1000);},1000);
	   block.css({'margin':'0px'})
      var p = $('<ppp>'+newColor+'</ppp>');
		p.css({'color':'#000000'});
	  setTimeout(function(){p.animate({'color':newColor},1000);},1000);
	
      p.appendTo(block);
	  
      setTimeout(function(){
      block.hover(function(){
		  $('body').clearQueue()
			block.clearQueue()

          $('body').animate({'background-color':newColor},500);
          block.animate({'background-color':'#ffffff'},500);
          },function(){
			  $('body').clearQueue()
			block.clearQueue()
              $('body').animate({'background-color':'#ffffff'},500);
              block.animate({'background-color':newColor},500);
              });
			block.click(function(){
				$('#h1').remove()
				$('#h2').remove()
				var h1=$("<div id='h1'>This hex: "+newColor+"</div>");
				var h2=$("<div id='h2'>Previous hex: "+previous+"</div>");
				
				
				
				
				
				
				$('#prev').show('fold',500);
				$('.pblock').clearQueue()
				$('#PT').animate({'background-color':newColor,'color':previous},1000);
				$('#TP').animate({'color':newColor,'background-color':previous},1000);
				h1.hide()
				h2.hide()
				h1.appendTo('#H')
				h2.appendTo('#H')
				h1.show('fade',500);
				h2.show('fade',500);
				$('#TB').animate({'color':newColor},1000);
				$('#TW').animate({'color':newColor},1000);
				$('#WT').animate({'background-color':newColor},1000);
				$('#BT').animate({'background-color':newColor},1000);
				$('#TB1_A').animate({'background-color':newColor},1000);
				$('#TW1_A').animate({'background-color':newColor},1000);
				$('#WT1').animate({'background-color':newColor},1000);
				$('#BT1').animate({'background-color':newColor},1000);
				$('#PT1').animate({'background-color':newColor},1000);
				$('#PT1_A').animate({'background-color':previous},1000);
				$('#TP1').animate({'background-color':previous},1000);
				$('#TP1_A').animate({'background-color':newColor},1000);
				previous=newColor
				
			})
      },2000);
   };
   function createCustBlock(newColor){
       var block=$("<pp></pp>");
       
       var w = 0 //Math.floor(Math.random() * 100 + 10);
       var h = 0 //Math.floor(Math.random() * 100 + 10);
       
       block.css({
		   'vertical-align':'top',
           'width':w+"px",
           'height':h+"px",
           'margin':'35px',
           'display':'inline-block',
           'border-radius':'0px',
           'background-color':'#000000',
           'position':'relative',
           'z-index':'1',
		   'padding':'3px'
       }); 
       block.hide()
       block.appendTo("#cont2");
       block.animate({'height':'70px','width':'70px','margin':'0px'},1000,'easeOutBounce')
	   setTimeout(function(){block.animate({'background-color':newColor,'border-radius':'10px'},1000);},1000);
	   block.css({'margin':'0px'})
      var p = $('<ppp>'+newColor+'</ppp>');
		p.css({'color':'#000000'});
	  setTimeout(function(){p.animate({'color':newColor},1000);},1000);
	
      p.appendTo(block);
	  
      setTimeout(function(){
      block.hover(function(){
		  $('body').clearQueue()
			block.clearQueue()

          $('body').animate({'background-color':newColor},500);
          block.animate({'background-color':'#ffffff'},500);
          },function(){
			  $('body').clearQueue()
			block.clearQueue()
              $('body').animate({'background-color':'#ffffff'},500);
              block.animate({'background-color':newColor},500);
              });
			block.click(function(){
				$('#h1').remove()
				$('#h2').remove()
				var h1=$("<div id='h1'>This hex: "+newColor+"</div>");
				var h2=$("<div id='h2'>Previous hex: "+previous+"</div>");
				
				
				
				
				
				
				$('#prev').show('fold',500);
				$('.pblock').clearQueue()
				$('#PT').animate({'background-color':newColor,'color':previous},1000);
				$('#TP').animate({'color':newColor,'background-color':previous},1000);
				h1.hide()
				h2.hide()
				h1.appendTo('#H')
				h2.appendTo('#H')
				h1.show('fade',500);
				h2.show('fade',500);
				$('#TB').animate({'color':newColor},1000);
				$('#TW').animate({'color':newColor},1000);
				$('#WT').animate({'background-color':newColor},1000);
				$('#BT').animate({'background-color':newColor},1000);
				$('#TB1_A').animate({'background-color':newColor},1000);
				$('#TW1_A').animate({'background-color':newColor},1000);
				$('#WT1').animate({'background-color':newColor},1000);
				$('#BT1').animate({'background-color':newColor},1000);
				$('#PT1').animate({'background-color':newColor},1000);
				$('#PT1_A').animate({'background-color':previous},1000);
				$('#TP1').animate({'background-color':previous},1000);
				$('#TP1_A').animate({'background-color':newColor},1000);
				previous=newColor
				
			})
      },2000);
   };
  
   var spinner = $( "#spinner" ).spinner();
   var button1 = $("#heh").button();
   var button2 = $("#heh2").button();
   button1.click(function(){
       $('pp').empty()
       $('pp').animate({'height':'0px','width':'0px','margin':'35px'},1000,'easeInBack')
	   setTimeout(function(){$('pp').css({'padding':'0px'});},1000);
       setTimeout(function(){
           
           $('#cont2').empty();
           var val = spinner.spinner( "value" ); 
           for (i = 0; i < val; i++) {
            
            createRandBlock(i)
        };
           },1500)
   });
   button2.click(function(){
			   createCustBlock($('#in').val())
		   });
 //setInterval(createRandBlock, 200);
$('#prev').hide()
$('#cls').click(function(){
	$('#prev').hide('fold',500)
})
});                                
        