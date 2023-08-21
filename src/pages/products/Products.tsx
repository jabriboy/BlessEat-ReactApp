import {useEffect, useState, useContext} from 'react'
import {ShopContext} from '../../App'
import Item from './Item';
import { db, storage } from '../../firebaseConfig';
import {onSnapshot, query, collection, orderBy} from 'firebase/firestore'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import {useQuery} from '@tanstack/react-query'
import './products.css'

function Products(){
    const [productState, setProductState] = useState([]);
    const [loading, setLoading] = useState(false);

    const productsColection = collection(db, "produtos")

    const {cartItems} = useContext(ShopContext)

    const getAll = async () => {
        setLoading(true)
        const imagesFolder = ref(storage, 'imagens/');
        const photoList = await listAll(imagesFolder);
        
        let Url: string[] = []
        for(let i in photoList.items){
            let photoUrl = await getDownloadURL(photoList.items[i]);
            Url.push(photoUrl)
        }
        setLoading(false)
        return Url
    }

    const {} = useQuery(["products"], () => {
        getAll()
            .then(urls => {
                const productQuery = query(productsColection, orderBy("desc"))

                const unsuscribe = onSnapshot(productQuery, (snapshot) => {
                    let products = []
                    let i = 0
                    snapshot.forEach((doc) => {
                        products.push({...doc.data(), id: doc.id, url: urls[i]})
                        i++;
                    })
                    setProductState(products)

                })
                return () => unsuscribe
            })
    })

    if(!loading){
        return(
            <>
            <h1>PRODUTOS</h1>
            
            <div className="produtos">
                {productState.map((item) => {
                    return(
                    <div key={item.id}>
                        <Item url={item.url} desc={item.desc} preco={item.preco} tipo={item.tipo} total={cartItems}/>
                    </div>
                    )
                })}
            </div>
            </>
        )
    }

    return(
        <>
        <h1>carregando...</h1>
        </>
    )
}
export default Products;