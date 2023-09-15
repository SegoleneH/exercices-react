import React, { Component } from "react";
import Voiture from './Voitures';
import { Wrapper } from "./Wrapper";
import { MyHeader } from "./MyHeader";



//* Default export : export default MyVoitures (à la fin)
//*             OU
//* ou comme ici, Named export : ajouter export devant class (plus simple)
export class MyVoitures extends Component {

    state = {
        voitures : ["Ford", "Mercedes", "Peugeot"]
    }

    render() {

        //* syntaxe déstructurée
        // const {color} = this.props;
        const {voitures} = this.state;

        return (
            <div>
                {/* UN SEUL ÉLÉMENT PARENT */}


                <Wrapper>
                    <MyHeader myStyle={this.props.color}>
                        {this.props.title}
                    </MyHeader>
                    <p>Lorem</p>
                </Wrapper>

                <Voiture >{voitures[0]} </Voiture>
                <Voiture >{voitures[1]} </Voiture>
                <Voiture >{voitures[2]} </Voiture>
            </div>
        )
    }
}