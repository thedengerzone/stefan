import {useEffect, useState} from "react";
import Product from "../interface/Product";
import MediaCard from "../component/MediaCard";
import {Page} from "../interface/Page";
import {Grid} from "@mui/material";

export function Home() : any{

    const [products,setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts().then((data => setProducts(data.content)));
    },[])

    async function fetchProducts(): Promise<Page<Product[]>> {
        const response = await fetch("http://localhost:8888/api.predic8.de/shop/v2/products?pageNumber=0&pageSize=10&sort=name&desc");
        return await response.json();
    }

    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Grid
                container
                spacing={2} // Adjust spacing between grid items
                direction="row" // Arrange items in a row
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}>
                {products.map(product => <Grid lg={4} item><MediaCard name={product.name} id={product.id} /></Grid>)}
            </Grid>
        </div>
    )

}