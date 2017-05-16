import React, {Component} from 'react'
import Header from './Header.js';
import InfoList from './InfoList.js';
import Bio from './Bio.js';
import Quote from './Quote.js';

class Content extends Component {
  render(){
    return( <div>
              <Header title="Home" subtitle="Hi, I'm Stacy. This is me learning to use React :)" />
              <InfoList answer_1="Chicago, IL" answer_2="Learning React!" answer_3="Stella Barra" />
              <Bio text="Fixie cred intelligentsia, messenger bag blue bottle 3 wolf moon sartorial vegan godard trust fund banh mi keffiyeh offal celiac. Street art austin small batch copper mug health goth. Selvage ethical sriracha, quinoa bitters unicorn intelligentsia plaid echo park art party meh twee narwhal. Schlitz lo-fi sustainable fashion axe wolf meh, plaid hell of microdosing. Meggings bespoke umami, forage art party gastropub hella microdosing prism gluten-free skateboard hexagon celiac snackwave. Man braid slow-carb tote bag, DIY snackwave glossier kombucha semiotics normcore austin. Sartorial pickled sustainable bushwick vaporware forage kinfolk cold-pressed tote bag."/>
              < Quote text="'' You miss 100% of the shots you don't take. - Wayne Gretzky  '' - Michael Scott"/>
            </div>)
  }
}

export default Content;

