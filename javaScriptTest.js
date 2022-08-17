var products=[{"name":"product1","price":5.50},{"name":"product2","price":8.50},{"name":"product3","price":10.50}];
var item=[];
var quantity=0;
var total=0;

function addToCart(args){ 
   ++quantity;


   item.push(products[args]);
   populate(item); 
  
}

 function populate(item){
    let text="";
   
    for(i=0;i<item.length;i++)
    {
   
          text="<tr><td>"+item[i].name+"</td><td>"+"$"+item[i].price+"</td><td>"+quantity+"</td><td>"+quantity*item[i].price+"</td></tr>";
           total=item[i].price*quantity;
        }
    document.getElementById('tbody').innerHTML=text;
  
 }


function emptycart(){
    item.splice(0,3);
    populate(item);
}