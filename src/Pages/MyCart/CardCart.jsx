
const CardCart = ({ cart }) => {
    const { name, brandName, image, price } = cart
    return (
        <tr className="text-white text-lg text-center ">
            <td>
                <div className=" w-32 h-24">
                    <img className="h-full w-full" src={image} alt="Avatar" />
                </div>
            </td>
            <td className="bg-slate-500"> {name}</td>
            <td>{brandName}</td>
            <td className="bg-slate-500">{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default CardCart;