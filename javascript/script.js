$(function(){
    // var txt = document.getElementById('txt_nome');
    var txt = $('#txt_nome');

    // txt.val('Novo Valor do campo');
    /*setInterval(function(){
        txt.toggle();
        if(txt.is(":visible")){
            txt.hide('slow');
        } else{
            txt.show('slow');
        }
        txt.hide('slow');   

    }, 2000);
    */
    var $div_produtos = $('#produtos');
    var $div_frm_cadastro = $('#div_frm_cadastro');

    var $txt_nome_produto = $div_frm_cadastro.find("#txt-nome");
    var $txt_preco_produto = $div_frm_cadastro.find("#txt-preco");

    var $msg_sucesso = $(".js-msg-sucesso");

    var $ar_produtos = [
        {"nome" : "Produto 1", "valor" : 10.5},
        {"nome" : "Produto 2", "valor" : 19.5},
        {"nome" : "Produto 3", "valor" : 20.5}
    ];

    function renderizaProdutos(){
        //limpo os objetos dentro da div
        $div_produtos.empty();
        $.each($ar_produtos, function(key, obj){
            //crio nova div
            var $div = $("<div>");
            var $h1 = $("<h1>");
            var $p = $("<p>");
            //adiciono html nessa div
            $h1.html(obj.nome); 

            $p.html(obj.valor);          
            //adiciono dentro da div
            $div.append($h1);

            $div.append($p);
            //adiciona o objeto div no container #produtos
            $div_produtos.append($div);

        });
    }

    $div_frm_cadastro.find(".js-frm-cadastro").submit(function(e){
        e.preventDefault();       

        $ar_produtos.push
        (            
            {"nome" : $txt_nome_produto.val(), "valor" : $txt_preco_produto.val()}
        );    

        renderizaProdutos();

        $(this)[0].reset();

        $msg_sucesso.removeClass('hide');
        setTimeout(function(){
            $msg_sucesso.addClass('hide');
        }, 2000);

        //location.href="#div_frm_cadastro";
        //window.scrollTo(0, document.body.scrollHeight);
        
    });    
    
    renderizaProdutos();
});

