 $(function(){
  $('.one').animate({
        top:'285px',
        opacity:1

  },500);
  $('.two').animate({
    top:'317px',
    opacity:1
  },700);
  $('.three').animate({
    top:'370px',
    opacity:1
  },900);
  $('.four').animate({
    top:'425px',
    opacity:1
  },1100);
  $('.img_left').animate({marginLeft:'0px'},500);
 $('.img_right').animate({marginLeft:'0px'},500);
  $('.add_input').animate({right:'150px',width:'305px'},3000);
  });
 $(function(){
    var ok1=false;
    var ok2=false;
    var ok3=false;
    $('input[name="username"]').focus(function(){
     console.log('disn');
      $('.state1').val('用户名应该为3-20位之间');
    }).blur(function(){
      if($(this).val().length>=3&& $(this).val().length<=12&& $(this).val()!=''){
        $('.state1').val('输入正确！').removeClass('state_2');
        ok1=true;
      }else{
         $('.state1').val('用户名应该为3-20位之间名').removeClass('state_1').addClass('state_2');
      }
    });
    //邮箱地址验证
    $('input[name="address"]').focus(function(){
      $('.state2').val('请输入正确的EMAIL格式');
    }).blur(function(){
      if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
        $('.state2').val('请输入正确的EMAIL格式').removeClass('state_1').addClass('state_2');
      }else{
        $('.state2').val('输入正确！').removeClass('state_2');
        ok2=true;
      }
    })

    //密码
    $('input[name="password"]').focus(function(){
       $('.state3').val('请输入密码');
    }).blur(function(){
      if($(this).val().length>=6&&$(this).val().length<=20&&$(this).val()!=""){
        $('.state3').val('密码格式正确！').removeClass('state_2');
        ok3=true;
      }else{
         $('.state3').val('请输入密码').removeClass('state_1').addClass('state_2');
      }
    })
    $('.submit').click(function(){
      if(ok1&&ok2&&ok3){
        $('form').submit();
      }else{
        return false;
      }
    });
  })