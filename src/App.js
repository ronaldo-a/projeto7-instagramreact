import Navbar from "./Navbar"
import Esquerda from "./Esquerda"
import Sidebar from "./Sidebar"

function App() {
    return (
        <div class="app">
            <Navbar />
            <div class="corpo">
                <Esquerda />
                <Sidebar />
            </div>
        </div>
    )
}

export default App