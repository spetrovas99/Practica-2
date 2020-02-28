import React from 'react';
const botonera = (props) =>{
const cientifica = (
    <div className = "div4">
        <div className ="botones" onClick={props.clickBoton.bind(this, "cos(")} ><p> {"cos("}</p></div>  
        <div className ="botones" onClick={props.clickBoton.bind(this, "sin(")}><p> {"sin("}</p></div>  
        <div className ="botones"onClick={props.clickBoton.bind(this, "tan(")}><p> {"tan("}</p></div>  
        <div className ="botones"onClick={props.clickBoton.bind(this, "(")}><p> {"("}</p></div>  
        <div className ="botones"onClick={props.clickBoton.bind(this, ")")}><p> {")"}</p></div>  
    </div> 
)

    return(
        <div className ="botonera" >
            <div className ="div1">
                <div className ="botones" onClick={props.clickBoton.bind(this, "<=")}><p>{"<="}</p></div>  
                <div className ="botones"onClick={props.clickMode.bind(this)}><p> {"MODE"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "/")}><p> {"/"}</p> </div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "*")}><p>{"*"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "7")}><p>{"7"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "8")}><p>{"8"}</p></div> 
                <div className ="botones" onClick={props.clickBoton.bind(this, "9")}><p>{"9"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "-")}><p>{"-"}</p></div>   
                <div className ="botones" onClick={props.clickBoton.bind(this, "4")}><p>{"4"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "5")}><p>{"5"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "6")}><p>{"6"}</p></div>  
                <div className ="botones" onClick={props.clickBoton.bind(this, "+")}><p>{"+"}</p></div>
            </div>
            <div className ="div2">
                <div className = "div1">
                    <div className ="botones" onClick={props.clickBoton.bind(this, "1")}><p>{"1"}</p></div>  
                    <div className ="botones" onClick={props.clickBoton.bind(this, "2")}><p>{"2"}</p></div>  
                    <div className ="botones" onClick={props.clickBoton.bind(this, "3")}><p>{"3"}</p></div>
                </div>
                <div className ="div1">
                    <div className ="boton0" onClick={props.clickBoton.bind(this, "0")}><p>{"0"}</p></div>  
                    <div className ="botones" onClick={props.clickBoton.bind(this, ".")}><p>{"."}</p></div>
                </div>  
            </div>
            <div className ="botonIgual" onClick={props.clickBoton.bind(this, "=")}><p>{"="}</p></div> 

            {props.visible ? cientifica : null}
                 
            
        </div>
    )
}
export default botonera;