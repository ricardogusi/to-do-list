var geraUl = document.querySelector('.caixa ul'); 
var pegaInput = document.querySelector('.campos #input'); 
var botao = document.querySelector('#botao');



var todos = JSON.parse(localStorage.getItem('to_do_list'))  || [] ;  


function mostrarTodos(){        

    geraUl.innerHTML ='';      

    for (item of todos) {       
        var newtodoli = document.createElement('li');     
        var label = document.createElement('label');
        var newtodotext = document.createTextNode(item);  
        var checkbox = document.createElement('input');   
        var img = document.createElement('img')
        // var linktext = document.createTextNode('Excluir');
        // var addlink = document.createElement('a');
        

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'check');
        checkbox.setAttribute('id', 'checkbox');
        checkbox.addEventListener('click', tacharLabel);
        
        img.setAttribute('src', './files/lixeira.svg');


        label.setAttribute('for', 'checkbox');


        //addlink.setAttribute('href', '#');

        var pos = todos.indexOf(item);   
        //addlink.setAttribute('onClick', 'deletarLi(' + pos + ' )' );
        //addlink.appendChild(linktext);
        
        //checkbox.setAttribute('onclick', 'deletarLi(' + pos + ')');  
        img.setAttribute('onclick', 'deletarLi(' + pos + ')');  
         

        

          
    
        geraUl.appendChild(newtodoli); 
        newtodoli.appendChild(newtodotext);         
        newtodoli.appendChild(checkbox);    
        newtodoli.appendChild(img)  ;
        
        // newtodoli.appendChild(addlink);
    
       
       
    }

}

mostrarTodos();




function Addtodo(){                          
    var txtadd = pegaInput.value ;           
    if (txtadd.length == 0 ) {             
        alert("Digite alguma tarefa.")
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


function tacharLabel(){

        this.parentNode.classList.toggle('tachar')
      
       
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
