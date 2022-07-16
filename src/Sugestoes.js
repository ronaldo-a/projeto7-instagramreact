export default function Sugestoes() {
    const sugestaoInfo = [
        {profileImg: "assets/img/bad.vibes.memes.svg", profileName: "bad.vibes.memes", profileRazao: "Segue você"},
        {profileImg: "assets/img/chibirdart.svg", profileName: "chibirdart", profileRazao: "Segue você"},
        {profileImg: "assets/img/razoesparaacreditar.svg", profileName: "razoesparaacreditar", profileRazao: "Novo no Instagram"},
        {profileImg: "assets/img/adorable_animals.svg", profileName: "adorable_animals", profileRazao: "Segue você"},
        {profileImg: "assets/img/smallcutecats.svg", profileName: "smallcutecats", profileRazao: "Segue você"}
    ]

    const sugestaoInfoArr = sugestaoInfo.map(props => 
        <div class="sugestao">
              <div class="usuario">
                <img src={props.profileImg} />
                <div class="texto">
                  <div class="nome">{props.profileName}</div>
                  <div class="razao">{props.profileRazao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>        
        )


    return (
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestaoInfoArr}

        </div> 
        )
}