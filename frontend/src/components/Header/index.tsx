import iconHeader from '../../assets/img/header.png'

export default function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={iconHeader} alt="" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por <a href="https://github.com/matheusdias20">@matheusdias20</a>
                </p>
            </div>
        </header>
    )
}