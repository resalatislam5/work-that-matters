import dot from '@/app/ass/dot-small-svgrepo-com.svg'
import asutralia from '@/app/ass/australia-svgrepo-com.svg'
import time from '@/app/ass/time-svgrepo-com.svg'
import dolor from '@/app/ass/dollar-minimalistic-svgrepo-com.svg'
import Image from 'next/image';
function CustomerSuccess({selected}) {
    return (
        <div>
             { (selected.name =='All' || selected.name == 'Customer Success')&&
            <div>
            <hr className='hidden md:flex' />
            <div className="lg:grid grid-cols-3 md:py-20 py-5 text-[#4A525D]">
                <div className="flex flex-col gap-3 pb-5 lg:pb-0">
                    <h2 className="text-xl font-bold text-black">Customer Success</h2>
                    <p className="">Open positions in our design team</p>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                {[...Array(1)].map((t,i) => <div key={i} className="border sm:p-8 p-5 rounded-lg flex flex-col gap-9 font-semibold">
                        <div className='flex flex-col sm:gap-2 gap-4'>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between">
                                <div className="flex gap-3">
                                    <h3 className="sm:text-xl text-black font-bold">Product Designer</h3>
                                    <p className="bg-[#F4F5FA] text-sm  flex items-center sm:px-1 rounded-full"><Image className='w-5' src={dot} alt="" /> Design</p>
                                </div>
                                <div className="bg-[#F4F5FA] gap-2 w-52 flex items-center px-1 rounded-full">
                                    <Image className='rounded-full w-5' src={asutralia} alt="" />
                                    <p>Melbourne, Australia</p>
                                </div>
                            </div>
                            <p className='text-sm'>{"We're"} looking for a mid-level product designer to join our team</p>
                        </div>
                        <div className='flex flex-wrap gap-5'>
                            <p className='flex gap-2 items-center '><Image className='w-5' src={time} alt="" />Full-time</p>
                            <p className='flex gap-2 items-center '><Image className='w-5' src={dolor} alt="" />80k - 100k</p>
                            <p className='flex gap-2 items-center '><Image className='w-5' src={time} alt="" />Vacancy</p>
                            <p className='flex gap-2 items-center '><Image className='w-5' src={dolor} alt="" />experience</p>
                        </div>
                    </div>)}
                </div>
            </div>
            </div>}
        </div>
    );
}

export default CustomerSuccess;