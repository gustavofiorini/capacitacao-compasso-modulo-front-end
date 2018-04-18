
var $email = $('#email');
var $box_produtos = $(".js-box-produtos");
var $sugestoes_produtos = $(".js-sugestoes-produtos");
// var $cam_pesquisa = $('#cam_pesquisa');
var $cam_pesquisa = document.getElementById('cam_pesquisa');

//ao clicar no input remove classe hide em sugestoes-produtos
$cam_pesquisa.onfocus = function(){$sugestoes_produtos.removeClass('hide')};
/*$cam_pesquisa.onfocus = function(){
    if($cam_pesquisa.val().length < 2){
        $sugestoes_produtos.removeClass('hide');        
    }else{
        $box_produtos.removeClass('hide');
    }
};
*/
    

//ao clicar fora do input adiciona classe hide em sugestoes-produtos
$cam_pesquisa.onblur = function(){$sugestoes_produtos.addClass('hide')};
//criar function para se tiver 3 ou mais caracteres no campo de pesquisa alterar de 
//sugestoes de produtos para box de produtos

    /*if($cam_pesquisa.val().length >2){
        $sugestoes_produtos.addClass('hide');
        $box_produtos.removeClass('hide');
    }*/


//slicker carousel
$(document).ready(function(){
    $('.main-banner').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
    
//validar email
$email.bind('keydown', function(event){
    //quando paertar enter não realiza açao default
    if(event.keyCode == 13){
        event.preventDefault();                       
        
        //verifica se o caractere '@' esta presente no input
        var str = $email.val();            
        var n = str.indexOf("@");
        console.log(n);
        
        //se n < 0 '@' não foi inserido 
        if (n < 0) {        
            alert("Faltou @");                                     
        };
        //se n > 0 e n < 3, '@' foi inserido mas não tem 3 caratceres antes
        if (n > 0 && n < 3){
            alert('Insira pelo menos 3 caracteres antes do @');
        }                         
    }
    });











