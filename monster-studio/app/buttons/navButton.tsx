import { NavLink } from "@remix-run/react"

interface NavButtonProps {
    activeNavStyle: string,
    inactiveNavStyle: string,
    text: string,
    to: string,
    reloadDocument: boolean
}

export default function NavButton(props: NavButtonProps) {
    const baseStyle = " rounded-3xl";

    return (
        <NavLink to={props.to} reloadDocument={props.reloadDocument} className={({isActive}) => (isActive ? props.activeNavStyle : props.inactiveNavStyle) + baseStyle}><li>{props.text}</li></NavLink>
    )
}