import logo from '//..//../src/assets/images/logo.png';
import './Header.css'

function Header() {
    const menuItems= [
        { id: 1, name: 'Сопровождение бизнеса', href: '#' },
        { id: 2, name: 'Дист. обучение', href: '#' },
        { id: 3, name: 'Лицензирование', href: '#' },
        { id: 4, name: 'О нас', href: '#' },
        { id: 5, name: 'Контакты', href: '#' }
    ];

    return (
        <header>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti distinctio illo iure magni mollitia odit provident quia quis quos recusandae repellat soluta suscipit temporibus, voluptas? Adipisci corporis molestiae officiis?</span></p>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        {menuItems.map(item =>(
                            <li className="menu-item">
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="button-menu">
                    <button className="button-circle"></button>
                    <button className="button-circle"></button>
                    <button className="button-rectangle"></button>
                </div>
            </div>
        </header>
    )
}
export default Header