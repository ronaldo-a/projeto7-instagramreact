import Sugestoes from "./Sugestoes"

let sugestion = [{sugImg: "assets/img/catanacomics.svg", sugNickName: "catanacomics", sugName: "Catana" }]

function Sugestion(props) {
    return (
    <div class="usuario">
        <img src={props.sugImg} />
        <div class="texto">
            <strong>{props.sugNickName}</strong>
            {props.sugName}
        </div>
    </div>
    )
}

let sugestionArr = sugestion.map(Sugestion)


export default function Sidebar() {
    return (
        <div class="sidebar">
            {sugestionArr}

            <Sugestoes />
            
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}