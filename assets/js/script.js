let global = '';

document.addEventListener("keydown", function(event) {
    
    if (event.key === 'a') {
       
 global = 'grey';
    } else if (event.key === 's') {
    
    global = 'pink';
    } else if (event.key === 'd') {
      
        global= 'orange';
    }
})

const div = function(id){
    document.getElementById(id).addEventListener("click", function(){
        this.style.backgroundColor = global;})
    
}
div('div1')
div('div2')
div('div3')
div('div4')