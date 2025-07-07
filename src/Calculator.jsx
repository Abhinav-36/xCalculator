import { useState } from "react";
import styles from "./Calculator.module.css";
import {evaluate} from 'mathjs';


export default function Calculator(){
    const [exp,setExp] = useState("");
    const [value,setValue] = useState({value: "",isSet: false});
    const items = ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'];


    const handleChange = (e) => {
        console.log(e);
        
        let char = e.target.value;
        console.log(char);
        

        if(char === '='){
            const res = evaluate(exp);
            setValue({value: res, isSet:true});
        }else if(char === 'C'){
            setExp("")
            setValue({value:"",isSet:false})
        }
        else{
            setExp(exp+char);
        }

        
    } 


    return (
        <div className={styles['calculator']}>  
            <header><h1>React Calculator</h1></header>
            <input type="text" value={exp} name="expression" className={styles['input']} onChange={handleChange}/>
            {
                value.isSet ? (<div className={styles['result']}>{value.value}</div>) : ""
            }
            <div className={styles["grid-container"]}>
                {
                    items.map((item)=>(
                        <button key={item} className={styles['btn']} type="button" value={item} onClick={handleChange}>{item}</button>
                    ))
                }
            </div>
        </div>
    );
}