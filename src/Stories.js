export default function Stories() {
    function Story(props) {
      return (
        <div class="story">
          <div class="imagem">
            <img src={props.img} />
          </div>
          <div class="usuario">{props.usuario}</div>
        </div>
      );
    }
  
    let storyInfo = [
      { img: "./assets/img/9gag.svg", usuario: "9gag" },
      { img: "./assets/img/meowed.svg", usuario: "meowed" },
      { img: "./assets/img/barked.svg", usuario: "barked" },
      {
        img: "./assets/img/nathanwpylestrangeplanet.svg",
        usuario: "nathanwpylestrangeplanet"
      },
      { img: "./assets/img/wawawicomics.svg", usuario: "wawawicomics" },
      { img: "./assets/img/respondeai.svg", usuario: "respondeai" },
      { img: "./assets/img/filomoderna.svg", usuario: "filomoderna" },
      { img: "./assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
    ];
  
    let storiesArr = storyInfo.map((props) => (
      <Story img={props.img} usuario={props.usuario} />
    ));
  
    return (
      <div class="stories">
        {storiesArr}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
  }