var items = [];
    document.querySelector('input[type=submit]')
    .addEventListener('click',()=>{
       var nomeProduto = document.querySelector('input[name=nome_produto]');
       var precoProduto = document.querySelector('input[name=preco_produto]');

        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        /*
        <div class="lista__produtos-single">
            <h3>RedBull</h3>
            <h3 class="price__produto"><span>$20,00</span></h3>
        </div>
        */
       let listaProdutos = document.querySelector('.lista__produtos');
       let soma = 0;
       listaProdutos.innerHTML = "";

       items.map(function(val){
            soma+=parseFloat(val.valor);
            listaProdutos.innerHTML+=`
            <div class="lista__produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price__produto"><span>R$`+val.valor+`</span></h3>
       </div>`;
       })
       soma = soma.toFixed(2);
       nomeProduto.value = "";
       precoProduto.value = "";

       let elementoSoma = document.querySelector('.soma__produtos h2');
       elementoSoma.innerHTML = 'R$'+soma;
        
    });

    document.querySelector('button[nome=limpar]')
    .addEventListener('click',function(){
        items = [];
        document.querySelector('.lista__produtos').innerHTML = "";
        document.querySelector('.soma__produtos h2').innerHTML = "R$0,00";
        
    })