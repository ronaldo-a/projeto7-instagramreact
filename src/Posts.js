export default function Posts() {
    const postInfo = [
        {userImg: "assets/img/meowed.svg", userName: "meowed", postIgm: "assets/img/gato-telefone.svg", likerImg: "assets/img/respondeai.svg", likerName: "respondeai", othersLikers: "101.523"},
        {userImg: "assets/img/barked.svg", userName: "barked", postIgm: "assets/img/dog.svg", likerImg: "assets/img/adorable_animals.svg", likerName: "adorable_animals", othersLikers: "99.159"}
        ]

    const postInfoArr = postInfo.map(props => 
    <div class="post">
        <div class="topo">
            <div class="usuario">
            <img src={props.userImg} />
                {props.userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={props.postIgm} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likerImg} />
                <div class="texto">
                    Curtido por <strong>{props.likerName}</strong> e <strong>outras {props.othersLikers} pessoas</strong>
                </div>
            </div>
        </div>
  </div>) 

    return (
        <div class="posts">
            {postInfoArr}
        </div>
    )
}

