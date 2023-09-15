import React from 'react';
import { Wrapper } from './Wrapper';


//* 1) "ancien" javascript
// function Voiture() {
//     return (
//         <div>
//             <p>Marque:</p>
//             <p>Couleur:</p>
//         </div>
//     );
// }

//* 2) fonction fléchée
// const Voiture = (props) => {
//     return (
//         <div className='Voiture'>
//             <p>Marque: { props.children }</p>
//             <p>Couleur: { props.color }</p>
//         </div>
//     )
// }

//* 3) syntaxe déstructurée
// const Voiture = ({children,color}) => {

//     const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: néant</p>);

//     if(children) {
//         return (
//             <div className='Voiture'>
//                 <p>Marque: {children}</p>
//                 {colorInfo}
//             </div>
//         )
//     } else {
//         return (
//             <p className='errorMsg'>Pas de données</p>
//         )
//     }
// }

//* 4 ) syntaxe ternaire 
const Voiture = ({ children, color }) => {

    let colorInfo = "";
    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Néant"
    }

    return children ? (
        <Wrapper>
            <p>Marque: {children}</p>
            <p>Couleur: {colorInfo}</p>
        </Wrapper>
    ): <p className='errorMsg'>Pas de données</p>  
    } 
        
    

export default Voiture;