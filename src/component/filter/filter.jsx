import React , {useState} from "react";
import styles from "./filter.module.css"


const Filter=({ filtration})=>{
    const[ filter,setfilter]=useState("")


     const handelaer=(e)=>{
          const name=e.target.value;
              setfilter(name)
              filtration(name)
            }



    return (
         <div className={styles.mp}>

        <input type='text' placeholder="filter by name" value={filter} onChange={handelaer} ></input>
         /*value take data from filter --onchange the word will be writing that will saved in state*/

         </div>)
}
export default Filter