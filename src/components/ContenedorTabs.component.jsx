import TablaPeliculas from "./TablaPeliculas.component"
import CardDeck from "./CardDeck.component"

const ContenedorTabs = (props) => {

    if (props.modo == 1) {
        // Modo Tabla
        return <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
                <TablaPeliculas />
            </div>
        </div>
    }else {
        // Modo Deck
        return <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
                <CardDeck />
            </div>
        </div>
    }
}

export default ContenedorTabs