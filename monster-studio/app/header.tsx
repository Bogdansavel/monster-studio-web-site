import { Link } from "@remix-run/react"

export default function Header() {
    return (
        <div className='grid justify-items-center'>
            <Link to=""><img src="Monster-studio-logo.png" className="w-24 py-3" alt="Monster studio logo" /></Link>
            <ul className='flex justify-center rounded-3xl bg-white navbar'>
                <Link to=""><li className='hover:bg-gray-200 rounded-3xl'>Głowna</li></Link>
                <Link to="cennik"><li className='hover:bg-gray-200 rounded-3xl'>Zapis</li></Link>
                <Link to="info"><li className='hover:bg-gray-200 rounded-3xl'>Info</li></Link>
            </ul>
            <a href='https://www.instagram.com/monster_might/' className='w-5 pt-4'><img src="instlg.png" alt="instagram"/></a>
        </div>
    )
}