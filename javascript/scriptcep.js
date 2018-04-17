
var $txt_cep = $('#txt_cep');
//var $txt_logradouro = $('#txt_logradouro');
//var $txt_bairro = $('#txt_bairro');
//var $txt_localidade = $('#txt_localidade');
//var $txt_uf = $('#txt_uf');
var $msg_pesquisando = $(".js-msg-pesquisando");

$txt_cep.mask("99999-999");

$txt_cep.bind('keydown', function(event){
    if(event.keyCode == 13){
        event.preventDefault();            
        
        if ($txt_cep.val().length != 9) {        
            alert("Insira um CEP válido");
            $txt_cep.val("");
            return false;     
        };  
        $msg_pesquisando.removeClass('hide'); 
        //exemplo professor
        //$txt_cep.next('span').removeClass('hide');  
        
        var $option = {
            "url":"https://viacep.com.br/ws/"+$txt_cep.val().replace("-", "")+"/json/"
        };

        $.ajax($option).done(function($data){
            $('#txt_logradouro').val($data.logradouro)
            $('#txt_bairro').val($data.bairro)
            $('#txt_localidade').val($data.localidade)
            $('#txt_uf').val($data.uf)
            
            
        }).always(function(){
            $msg_pesquisando.addClass('hide');
            //$txt_cep.next('span').addClass('hide');
        });
    }
});

  