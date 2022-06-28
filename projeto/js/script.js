//"document.getElementById.value, para imprimir os valores na tela, atraves de js"
function validarFormulario(){
	let nome=document.getElementById("nome-completo").value
	let email= document.getElementById("email").value
	let fone=document.getElementById("fone").value
	let estado=  document.getElementById("estado").value
	let cidade= document.getElementById("cidade").value
	let contato=document.getElementById("motivo-contato").value
	let texto=document.getElementById("caixa-texto").value
	
	if(nome==""){
		alert("o campo nome esta vazio")
	
	
	}
	if(email==""){
		alert("o campo email esta vazio")
		
	
	}
	//"if" vereficiacao "SE". verificacao "length", verificando o cumprimento
	if(fone==""|| fone.length<8){
		alert("o campo telefone nao atende os requisitos")
	
	
	}
	if(estado==""){
		alert("o campo estado esta vazio")
		
	
	}
	if(cidade==""){
		alert("o campo cidade esta vazio")
		
	
	}
	if(contato==""){
		alert("o campo contato  esta vazio")
		
	
	}
	if(texto==""){
		alert("o campo texto esta vazio")
	
	
	}
	console.log(nome)
	console.log(email)
	console.log(fone)
	console.log(estado)
	console.log(cidade)
	console.log(contato)
	console.log(texto)
	
	
}