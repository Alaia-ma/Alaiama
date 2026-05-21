import { useState } from "react";
import style from "./index.module.css";
const menuList:{id:number, name:string}[] = [
    {id:1, name:"摄影"},
    {id:2, name:"阅读"},
    {id:3, name:"探索"},
    {id:4, name:"更多..."}
];
const Main:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMenuMove = (index : number)=>{
        setActiveIndex(index);
    }
    return (
        <div className={style.main_header}>
            <h1 className={style.title}>我的爱好</h1>
            <h2 className={style.subtitle}>My interests</h2>
            <ul className={style.ul}>
                {menuList.map((item,index)=>(<li key={item.id} className={`${style.li} ${index === activeIndex ? style.mouseClick : ''}`} onClick={()=>handleMenuMove(index)}>{item.name}</li>))}
            </ul>
        </div>
    );
}
export default Main;