import Image from "next/image";
import female from '@/app/ass/Female.png'
function ImgSection() {
    return (
        <div className="pb-10">
            <Image className="w-full" src={female} alt="" />
        </div>
    );
}

export default ImgSection;