import React from 'react'

export default props =>(
    <div className="input-evol">
    <label>{props.lab}  </label>
<input className={props.classe} placeholder={props.place} type={props.tipo} value={props.valor} /> 

</div>
    )

