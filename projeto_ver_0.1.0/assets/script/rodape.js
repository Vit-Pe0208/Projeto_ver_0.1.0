/*Interatividade para o input email do footer direito do rodapé*/ 
function emailFooterdireito(){
    let pesquisar= document.querySelector("#inputFooterDireito input[id='inputFooter']")
    if(pesquisar.value==""){
        alert("Digite seu e-mail")
    }else{
        alert("e-mail enviado com sucesso")
    }
    }