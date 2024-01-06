import { Link } from "@remix-run/react"

export default function Header() {
    return (
        <div className='grid justify-items-center'>
            <Link to=""><img src="Monster-studio-logo.png" className="w-24 py-3" alt="Monster studio logo" /></Link>
            <ul className='flex justify-center rounded-3xl navbar gap-3'>
                <Link to=""><li className='hover:bg-gray-200 rounded-3xl bg-white'>Głowna</li></Link>
                <Link to="zapisy"><li className='hover:bg-gray-200 rounded-3xl bg-white'>Zapisy</li></Link>
                <Link to="info"><li className='hover:bg-gray-200 rounded-3xl bg-white'>Info</li></Link>
            </ul>
            <div className="flex gap-3">
                <a href='https://www.instagram.com/monster_might/' className='w-5 pt-4'>
                    <img src="instlg.png" alt="instagram logo"/>
                </a>
                <a href='https://youtube.com/@Darth._.julder' className='w-7 pt-4'>
                    <img src="youtubelg.png" alt="youtube logo"/>
                </a>
            </div>
        </div>
    )
}