import Image from "next/image"
import './card.css'
import Link from "next/link"
const Card = ({ item }) => {
    return (
        <Link href={'/'} className="card w-max hover:bg-green-500 rounded-lg overflow-hidden hover:text-white text-stone-500 ease-in duration-200 ">
            <div className="image">
                <Image src={item?.image} className="image" height={250} width={250} alt="pic" />
            </div>
            <div className="text-center pt-3 pb-1">
                <h2 className="capitalize text-xl">{item?.name}</h2>
                <p className="capitalize font-light  ">{item?.type}</p>
            </div>
        </Link>
    )
}

export default Card