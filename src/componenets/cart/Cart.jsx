

const Cart = ({cart}) => {
    const{name, price}=cart
    return (
        <div className=' grid grid-cols-2 gap-5 '>
            <p>{name}</p>
            <p>{price}</p>
        </div>
       
    );
};

export default Cart;