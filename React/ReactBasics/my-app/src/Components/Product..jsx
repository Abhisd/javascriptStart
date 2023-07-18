export default function Product(){

    let products=["Laptop","Keyboard","Mouse","Mobile","Headphones","Laptop"];

    let productList=[{id:1,name:"Laptop",price:50000},
                     {id:2,name:"Keyboard",price:2000},
                     {id:3,name:"Mouse",price:2100},
                     {id:4,name:"Mobile",price:30000},
                     {id:5,name:"Headphones",price:5000}];
    return(
        
            <ul>
                {
                    productList.map((product)=>{
                        return(
                            <div key={product.id}>Name:{product.name},Price:{product.price}</div>
                        );
                    })
                }

                {/* {
                    products.map(function(product){
                        return <li key={product}>{product}</li>
                    })
                } */}
                {/* <li>{products[0]}</li>
                <li>{products[1]}</li>
                <li>{products[2]}</li>
                <li>{products[3]}</li>
                <li>{products[4]}</li> */}
            </ul>
        
    )
}