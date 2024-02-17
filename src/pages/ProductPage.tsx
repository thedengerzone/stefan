import {useEffect, useState} from "react";
import Product from "../interface/Product";
import MediaCard from "../component/MediaCard";
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";


export function ProductPage() : any{
    let { id } = useParams();

    const [product,setProduct] = useState<Product>({
        id: undefined,
        name: ""
    })

    useEffect(() => {
        fetchProducts().then((data => setProduct(data)));
    },[])

    async function fetchProducts(): Promise<Product> {
        const response = await fetch(`http://localhost:8888/api.predic8.de/shop/v2/products/${id}`);
        return await response.json();
    }

    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}>
                 <Grid item><MediaCard name={product.name} id={product.id} /></Grid>
            </Grid>
        </div>
    )

}