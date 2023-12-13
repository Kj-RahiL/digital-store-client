
import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";


const CardCart = ({ cart, carts, setCarts }) => {
    const {_id, name, category
        , image, price } = cart

    console.log(carts)
   
    const handleDelete = _id => {
        console.log('handle delete' , _id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://digital-store-server-aqarlthqi-rahis-projects.vercel.app/myCart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cart=> cart._id !== _id)
                            setCarts(remaining)
                            // const remaining = carts.fi
                        }
                    })

            }
        })
    }

    return (
        <tr className="text-white text-lg text-center ">
            <td>
                <div className=" w-32 h-24">
                    <img className="h-full w-full" src={image} alt="Avatar" />
                </div>
            </td>
            <td className="bg-slate-500"> {name}</td>
            <td>{category}</td>
            <td className="bg-slate-500">{price}</td>
            <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost text-slate-50"><ImCross></ImCross></button>
            </th>
        </tr>
    );
};

export default CardCart;