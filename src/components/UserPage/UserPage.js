import React, {useState} from 'react'

function UserPage() {



    return (
        <div className="ConfigCard">
            <form>
                <span>Preset de Caducidad</span>
                <input type="int" placeholder="000"/>
                <span> Días</span>
                <br/>
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    )
}

export default UserPage