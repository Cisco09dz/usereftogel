import styles from "./card.module.css"
const Cads=({nameList, type , delt})=>{
    const cards=nameList.map(({first,phone,age} , idx)=>(
        <div className={styles.afro } key={idx}  style={{backgroundColor: type==='girl'? 'pink':'green'}}>
               <div>name :{first}</div>
               <div>phone number:{phone}</div>
              <div>age:{age}</div>
              <div className={styles.deletbuton} onClick={(e)=>delt(e,idx)}>x</div>
              </div>
               ));
    return <div>{cards}</div>
}
export default Cads 