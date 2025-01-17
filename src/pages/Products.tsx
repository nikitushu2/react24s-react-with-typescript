import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../types/product";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
      setFilteredProducts(data)
    })
  }, [])

  return (
    <>
    <Typography variant="h4" component="h1" gutterBottom>
      Products Page
    </Typography>
    <TextField id="outlined-basic" label="Search" variant="outlined" onChange={({target}) => setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(target.value.toLowerCase())))}/>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
      {filteredProducts.map(product => {
        return (
          <Card key={product.id} sx={{width: 500}}>
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{product.price}$</Typography>
              <img
                height="194"
                width="194"
                src={`${product.image}`}
                alt={`${product.title}`}
              />
              <Typography variant="body2">
                {product.description}
              </Typography>
              <CardActions>
                <Button size="small">ADD TO CART</Button>
                <Button size="small">LEARN MORE</Button>
                <Button size="small" component={Link} to={`/products/${product.id}`} state={{product}}>Single product page</Button>
              </CardActions>
            </CardContent>
          </Card>
        )
      })}
      </div>
    
    </>
  );
}

export default Products;
