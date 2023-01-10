let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputsenha = document.querySelector('#senha')

    if(inputsenha.getAttribute('type')=='password'){
        inputsenha.setAttribute('type','text')
    }else{
        inputsenha.setAttribute('type','password')
    }
})

let btnsenha1 = document.querySelector('#vrsenha1')

btnsenha1.addEventListener('click', ()=>{
    let inputsenha1 = document.querySelector('#senha1')

    if(inputsenha1.getAttribute('type')=='password'){
        inputsenha1.setAttribute('type','text')
    }else{
        inputsenha1.setAttribute('type','password')
    }
})

let btnsenha2 = document.querySelector('#vrcsenha2')

btnsenha2.addEventListener('click', ()=>{
    let inputsenha2 = document.querySelector('#senha2')

    if(inputsenha2.getAttribute('type')=='password'){
        inputsenha2.setAttribute('type','text')
    }else{
        inputsenha2.setAttribute('type','password')
    }
})

let check = document.querySelector("#concordar")
check.addEventListener('click',function(){
    let txt = document.querySelector("#txtnome")  
    let ema = document.querySelector("#txtemail")
    let dta = document.querySelector("#txtdatan")
    let dt = document.querySelector("#txtdataa")
    let bt  = document.querySelector("#bt")
    let hor = document.querySelector("#hora")
    let senha1 = document.querySelector("#senha1")
    let senha2 = document.querySelector("#senha2")
    let cur = document.querySelector("#ncur")
    if(check.checked){
        cur.setAttribute("class","")
        senha1.setAttribute("class","")
        senha2.setAttribute("class","")
        hor.setAttribute("class","")
        dt.setAttribute("class","")
        dta.setAttribute("class","")
        ema.setAttribute("class","")
        txt.setAttribute("class","")
        bt.setAttribute("class", "")
    }else{
        cur.setAttribute("class","ncur")
        senha1.setAttribute("class","senha1")
        senha2.setAttribute("class","senha2")
        hor.setAttribute("class","hora")
        dt.setAttribute("class","dta")
        dta.setAttribute("class","dtna")
        ema.setAttribute("class","txtemail")
        txt.setAttribute("class", "txtnome")
        bt.setAttribute("class", "oculto")
       
    }
})


function btcadastrar(){
    alert ('Cadastro Finalizado')
}

function Login(){
    alert('logado')}