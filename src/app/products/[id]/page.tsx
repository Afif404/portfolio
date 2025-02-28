'use client';
import { useParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type Product = null | {
    id: number;
    name: string;
    price: number;
}

async function registerUser(formData: any) {

    // REGISTER USER ( API CALL )


    return {success: true}
}

export default function ProductPage(){

    const {id} = useParams();
    const [state, registerUserForm, isPending] = useActionState<{success:boolean | null}>(registerUser, {success: null});
    
    useEffect(() => {
        // DATABASE CALL TO GET PRODUCT BY ID
        if(id === "1"){
            setProduct({id: 1, name: 'Product 1', price: 100})
        } else {
            setProduct(null);
        }
    },[]);

    const [product, setProduct] = useState<Product>(null);

    const handleRegister = (e: any) => {
        e.preventDefault();
        // REGISTER USER
    }

    if(!product){
        return <div>Product not found</div>
    }

    return <><form action={registerUserForm}>
    {state.success && <div>Success</div>}
    <button>{isPending? "Loading.." : "Submit"}</button>
</form>
{/* ------------------------------------------- */}
<form onSubmit={handleRegister}>
        {state.success === true && <div>Success</div>}
        <button>{isPending? "Loading.." : "Submit"}</button>
    </form></>
}