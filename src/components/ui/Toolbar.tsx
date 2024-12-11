const Toolbar = () => {
    const headers:string[] = ["About","Experience","Achievements","Projects","Contact"]
    return (
        <div className="flex w-full items-center justify-between bg-navy px-12 py-5 z-10">
            <div>
                <p className="text-aquamarine font-sans cursor-pointer"></p>
            </div>

            <div className="flex gap-10 slashed-zero items-center">
                {headers.map((word,index)=>(
                    <p key={index} className="text-aquamarine slashed-zero font-sans cursor-pointer">{`0${index+1}. `}<span className="font-sans text-lavendar hover:text-aquamarine slashed-zero cursor-pointer">{word}</span></p>
                ))}
                <div className="bg-transparent border border-aquamarine py-2 px-3 text-aquamarine rounded-md font-sans cursor-pointer">Resume</div>
            </div>
        </div>
    )
}

export default Toolbar;