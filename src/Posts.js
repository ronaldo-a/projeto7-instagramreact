import React from "react"

function Post(props) {
    const [icon, setIcon] = React.useState("heart-outline")
    const [color, setColor] = React.useState("")
    const [hydrated, setHydrated] = React.useState("")

    return (
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

            <div class="conteudo" onClick={() => like2()}>
                <img src={props.postImg}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={icon} class={hydrated} id={color} onClick={() => like()}></ion-icon>
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
        </div>
    )

    function like() {
        if (icon === "heart-outline") {
            setIcon("heart")
            setColor("red")
            setHydrated("md hydrated")
        } else {
            setIcon("heart-outline")   
            setColor("")
        }
    }

    function like2() {
        if (icon === "heart-outline") {
            setIcon("heart")
            setColor("red")
            setHydrated("md hydrated")
        }
    }
}


export default function Posts() {

    const postInfo = [
        {userImg: "assets/img/meowed.svg", userName: "meowed", postImg: "assets/img/gato-telefone.svg", likerImg: "assets/img/respondeai.svg", likerName: "respondeai", othersLikers: "101.523"},
        {userImg: "assets/img/barked.svg", userName: "barked", postImg: "assets/img/dog.svg", likerImg: "assets/img/adorable_animals.svg", likerName: "adorable_animals", othersLikers: "99.159"}
        ]

    const postInfoArr = postInfo.map(bolinha => <Post userImg={bolinha.userImg} userName={bolinha.userName} postImg={bolinha.postImg} likerImg={bolinha.likerImg} likerName={bolinha.likerName} othersLikers={bolinha.othersLikers} />) 
    console.log(postInfoArr)

    return (
        <div class="posts">
            {postInfoArr}
        </div>
    )
}

