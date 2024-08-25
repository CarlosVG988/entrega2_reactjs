import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import {useForm} from "react-hook-form"
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../components/firebase/config"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

        const {register , handleSubmit} = useForm();

        const comprar = (data) => {
            const pedido = {
                    cliente:data,
                    productos:carrito,
                    total:precioTotal()

            }
                console.log (pedido)

            const pedidosRef = collection(db,"pedidos") ;        

            addDoc(pedidosRef,pedido)
                .then ((doc) =>{
                    setPedidoId(doc.id);
                    vaciarCarrito();

                })
        }

        if(pedidoId){
            return (
                <div className="container">
                    <h1 className="main-title">Muchas gracias por la compra</h1>
                    <p>Tu numero de pedido es : {pedidoId}</p>
                </div>

            )

        }


    return (
        <div className='container'>
            <h1 className='main-title'>Finalizar compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresa tu correo' {...register("email")} />
                <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")} />


                <button className='enviar' type ="submit">Comprar</button>

            </form>
        </div>)
}

export default Checkout