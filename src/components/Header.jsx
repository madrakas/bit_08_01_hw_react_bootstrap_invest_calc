import logo from '../assets/logo.png';

export function Header(){
    return(
        <header id="header">
            <img src={logo} alt='logo'/>
            <h1>Investment calculator</h1>
        </header>
    )
}

export default Header