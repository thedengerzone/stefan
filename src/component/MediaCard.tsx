import * as React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';

interface props {
    name: string
    id?: number
}


export default function MediaCard({name, id}: props) {
    const navigate = useNavigate();
    const location = useLocation();


    function productPage(id?: number) {
        navigate(`/product/${id}`)
    }

    async function deleteProduct(id: number | undefined) {
        await fetch(`http://localhost:8888/api.predic8.de/shop/v2/products/${id}`, {
            method: 'DELETE',
        }).then(req => {
            debugger
            if (location.pathname == "/") {
                navigate(0)
            }
            navigate("/")

        })
    }

        return (
            <Card style={{backgroundColor: "#1C7C54", color: "#DEF4C6"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" onClick={() => productPage(id)}>Check</Button>
                    <Button variant="contained" size="small" onClick={() => deleteProduct(id)}>delete</Button>
                </CardActions>
            </Card>
        );
}