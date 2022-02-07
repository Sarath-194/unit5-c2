
async function addProduct() {
    

  let res = await fetch('http://127.0.0.1:5000/api/products', {
    method:'POST',
    body: JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
 })

 let Data = await res.json();
 console.log(Data)
}

async function deleteProd() {
  const id  = document.getElementById('product').value;   
  let res = await fetch(`http://127.0.0.1:5000/api/products/${id}`, {
    method:"DELETE",
    headers: {
      "Content-Type" : "application/json"
    }
  })
  let d =  await res.json
  console.log(d);
}