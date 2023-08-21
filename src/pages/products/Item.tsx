// import './products.css'
import {ShoppingCart} from 'phosphor-react'


function Item(props){
    
    return(
        <>
        <div className="item">
                <img src={props.url} alt={props.desc} />
                <p>{props.desc}</p>
                <h3>R${props.preco}</h3>
                <button>Adicionar ao carrinho {<ShoppingCart size={"1rem"}/>} ({props.total})</button>

        </div>
        </>
    )
}

export default Item;