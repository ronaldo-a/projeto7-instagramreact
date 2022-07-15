export default function Story() {
    
    let storyInfo = [
        {img: "./assets/img/9gag.svg", usuario: "9gag"}, 
        {img: "./assets/img/meowed.svg", usuario: "meowed"},
        {img: "./assets/img/barked.svg", usuario: "barked"},
        {img: "./assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
        {img: "./assets/img/wawawicomics.svg", usuario: "wawawicomics"},
        {img: "./assets/img/respondeai.svg", usuario: "respondeai"},
        {img: "./assets/img/filomoderna.svg", usuario: "filomoderna"},
        {img: "./assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
    ]

    let storiesArr = storyInfo.map(props => 
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>)
    
    return (
        <div class="stories">
            {storiesArr}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>      
    )
}