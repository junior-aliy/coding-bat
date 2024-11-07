import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/root"
import { HomePage } from "../pages"

const App = () => {
  return (<>
    <Navbar />
    <main className="w-[1180px] mx-auto py-8">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    </main>
  </>)
}

export default App