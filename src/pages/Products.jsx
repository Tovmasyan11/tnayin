import { useEffect, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Rating } from '@mui/material';

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((productsReponse) => {
                setProducts(productsReponse.products);
            });
    }, []);

    console.log(products);

    return (
        <div>
            <Typography variant="h3" sx={{ mb: '10px' }}>Products</Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Thumbnail</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="center">SKU</TableCell>
                            <TableCell align="center">Stock</TableCell>
                            <TableCell align="center">Rating</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={product.thumbnail} width='80px' height='80px' />
                                </TableCell>

                                <TableCell align="left">{product.title}</TableCell>
                                <TableCell align="center">{product.sku}</TableCell>
                                <TableCell align="center">{product.stock}</TableCell>
                                <TableCell align="center">
                                    <Rating value={product.rating} />
                                </TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};