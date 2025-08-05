document.getElementById('btn').addEventListener('click', function() {
   const text= document.getElementById('task').value;
   if(text.trim()===''){
    alert('Enter a task');
    return;
   }
  const a2=document.createElement('div');
  a2.className='a2';
  


    const list=document.getElementById('list');
    const item=document.createElement('li');
    item.className='task-item';
   
    item.innerHTML=text;

  

    const comp = document.createElement('input');
    comp.type = 'checkbox';
    comp.className="check"
    comp.addEventListener('change', function() {
      if (comp.checked) {
       alert("Task completed");
        item.style.color = 'green';
      } else {
        item.style.color = 'black';
      }
    });


     const deletebtn=document.createElement('button');

    const i=document.createElement('i');
    i.className='fas fa-trash';
    deletebtn.appendChild(i);
    deletebtn.addEventListener('click',function(){
       if( !confirm('Are you sure you want to delete this task?')) return;
      
      
       alert("Task deleted");
        list.removeChild(item);
      
    })


   item.appendChild(a2);
   
   
    a2.appendChild(comp);
     a2.appendChild(deletebtn)
      list.appendChild(item);
    document.getElementById('task').value='';
}
);