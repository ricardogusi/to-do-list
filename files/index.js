var geraUl = document.querySelector('.caixa ul'); 
var pegaInput = document.querySelector('.campos #input'); 
var botao = document.querySelector('#botao');

var todos = JSON.parse(localStorage.getItem('to_do_list')) || [];  

function mostrarTodos(){        

    geraUl.innerHTML ='';      

    for (item of todos) {       
        var newtodoli = document.createElement('li');     
        var newtodotext = document.createTextNode(item);  
       // var linktext = document.createTextNode('Excluir');
       // var addlink = document.createElement('a');

        var checkbox = document.createElement('input');   
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'check')
       

        //addlink.setAttribute('href', '#');

        var pos = todos.indexOf(item);   
        //addlink.setAttribute('onClick', 'deletarLi(' + pos + ' )' );
        //addlink.appendChild(linktext);
        
        checkbox.setAttribute('onclick', 'deletarLi(' + pos + ')');    
    
        newtodoli.appendChild(newtodotext);    
        
        geraUl.appendChild(newtodoli);         
       // newtodoli.appendChild(addlink);

       newtodoli.appendChild(checkbox);      
        
    }

}

mostrarTodos();





function Addtodo(){                          
    var txtadd = pegaInput.value ;           
    if (txtadd.length == 0 ) {             
        alert("Digite alguma tarefa seu fanfarrão.")
    } else {
    
    todos.push(txtadd);                
    pegaInput.value = '';               
    mostrarTodos();
    saveToStorage();

}}



function deletarLi(pos){                    

    todos.splice(pos, 1);               
    mostrarTodos();
    saveToStorage();
}



botao.onclick = Addtodo;              



document.addEventListener('keypress', function(e){     
    if(e.which == 13){
    
        Addtodo();
       
    }
 }, false);

function saveToStorage () {                
       
    localStorage.setItem('to_do_list', JSON.stringify(todos));
}