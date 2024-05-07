import React, {Fragment} from "react";

const Membre = ({nom, age, children}) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 10 ? 'yellow' : 'purple',
                color: age < 10 ? 'black' :'white' }}>
                {nom.toUpperCase()} : {age} ans
            </h2>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}

export default Membre
