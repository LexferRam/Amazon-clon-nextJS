import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from 'react-redux'
import { selectItems } from "../slices/basketSlice"

const checkout = () => {
    const items = useSelector(selectItems)
    return (
        <div className="bg-gray-100">
            <Header />
            <main clasName="lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            Your Shopping Basket
                        </h1>
                    </div>
                    <div>
                        {items.map(({ title, id, price, description, category, image }) => (
                            <h1 key={id}>{title}</h1>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    )
}

export default checkout
