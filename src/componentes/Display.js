import React from 'react';
const display = (props) => {
    if (props.visible) {
        return (
            <div className="displayHistorial">
                <div>
                    <div className="historial">
                        {props.historial.length > 2 ? <p>{props.historial[props.historial.length - 3]}</p> : null}
                        {props.historial.length > 1 ? <p>{props.historial[props.historial.length - 2]}</p> : null}
                        {props.historial.length > 0 ? <p>{props.historial[props.historial.length - 1]}</p> : null}
                    </div>
                    <div>
                        <p>{props.display}</p>
                    </div>

                </div>

            </div>
        )
    } else {
        return (

            <div className="display">{props.display}</div>
        )
    }

}
export default display;