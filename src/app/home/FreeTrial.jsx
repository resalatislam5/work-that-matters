function FreeTrial() {
    return (
        <div className="flex md:flex-row flex-col gap-10 md:gap-5 text-center md:text-left justify-between py-20 items-center">
            <div className="">
                <h1 className="font-bold sm:text-3xl text-2xl pb-3">Start your 30-day free trial</h1>
                <p className="text-lg">Join over 4,000+ startups already growing with unitled</p>
            </div>
            <div className="flex gap-5 font-semibold">
                <button className="lg:px-4 md:px-2 px-4 py-3 border rounded-lg">Learn More</button>
                <button className="lg:px-4 md:px-2 px-4 py-3 border rounded-lg bg-black text-white ">Get started</button>
            </div>
        </div>
    );
}

export default FreeTrial;