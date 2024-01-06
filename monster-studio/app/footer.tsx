export default function Footer() {
    return (
        <div className="w-full grid grid-cols-12 items-end">
            <div className="rounded-t-[5rem] border-t-2 border-neutral-700 col-start-2 col-span-10 lg:col-start-5 lg:col-span-4 mt-3">
                <div className="grid grid-cols-12 h-20 text-white p-3 mt-1 text-xs">
                    <div className="col-start-2 col-span-10">
                        <div className="grid grid-cols-2 text-neutral-500">
                            <div>
                                Adress: ul. Koletek 4/10
                            </div>
                            <div className="text-right">
                                +48794451272<br/>
                                monsterstudiopd@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}