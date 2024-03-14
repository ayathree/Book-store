

const Books = ({book, handleAdd}) => {

    const {image, name, price, rating}=book
    return (
        <div className=' border-2 border-green-400 p-11 m-5'>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{rating}</p>
            <p></p>
            <button onClick={()=>handleAdd(book)} className=' bg-green-400 px-5'>Add</button>
        </div>
    );
};

export default Books;