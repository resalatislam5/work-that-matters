import Image from "next/image";
import worldImg from '@/app/ass/world-svgrepo-com.svg'

function Banner() {
    return (
        <div className="grid xl:grid-cols-5  sm:py-20 py-10 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 xl:col-span-3 sm:col-span-2">
                <h1 className="xl:text-5xl text-3xl font-bold">Start doing work that matters</h1>
                <p className="xl:text-xl text-lg font-semibold">Our philosophy is simple -hire a team of diverse,passionate people and foster a culture that empowers you to do your best work</p>
            </div>
            <div className="sm:text-right xl:col-span-2">
                <select name="" id="" className="border-2 sm:w-52 w-full px-2 rounded-lg py-3">
                    <option value="Worldwide">Worldwide</option>
                    <option value="Worldwide">Worldwide</option>
                    <option value="Worldwide">Worldwide</option>
                    {/* <option value="Worldwide"><Image src={worldImg} alt="" />  Worldwide</option> */}
                </select>
            </div>
        </div>
    );
}

export default Banner;