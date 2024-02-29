import { NavLink } from "@remix-run/react"
import NavButton from "./buttons/navButton";

export default function Header() {
    const activeNavs = [
        "bg-gradient-to-r from-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-500 rounded-3xl",
        "bg-gradient-to-r from-purple-500 to-emerald-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-emerald-500 rounded-3xl",
        "bg-gradient-to-r from-emerald-500 to-yellow-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-yellow-300 rounded-3xl",
    ];
    const inactiveNavs = [
        "bg-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-500 rounded-3xl",
        "bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-emerald-500",
        "bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-yellow-300"
    ]

    return (
        <div className='grid justify-items-center'>
            <NavLink to=""><img src="Monster-studio-logo.png" className="w-24 py-3" alt="Monster studio logo" /></NavLink>
            <ul className='flex justify-center rounded-3xl navbar gap-3'>
                <NavButton activeNavStyle={activeNavs[0]} inactiveNavStyle={inactiveNavs[0]} text="Główna" to="" reloadDocument={false} />
                <NavButton activeNavStyle={activeNavs[1]} inactiveNavStyle={inactiveNavs[1]} text="Zapisy" to="zapisy" reloadDocument={true} />
                <NavButton activeNavStyle={activeNavs[2]} inactiveNavStyle={inactiveNavs[2]} text="Info" to="info" reloadDocument={false} />
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