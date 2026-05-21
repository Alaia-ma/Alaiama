import Header from "./component/Header/Header";
import Menu from "./component/Menu/Menu";
import Main from "./index/index";
const App = ()=>(
    <>
        <Header />
        <div style={{display: "flex"}}>
            <Menu />
            <Main />
        </div>
    </>
);
export default App;