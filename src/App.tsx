import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Recipe from "./pages/Recipe";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/recipe/1">
            Recipe
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
