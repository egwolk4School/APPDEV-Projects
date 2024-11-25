import React from 'react'
import { Link } from 'react-router-dom'
import KatanaLogo from '../assets/images/katanalogo.jpg'
import BlasphemousLogo from '../assets/images/blasphemouslogo.png'
import HollowLogo from '../assets/images/hollowknightlogo.png'
import DeadLogo from '../assets/images/deadcellslogo.png'
import MoonLogo from '../assets/images/moonscarslogo.png'
const games=[
    {id:1,name:'Katana Zero',desc:'Katana Zero is a 2019 platform game created by the indie developer Justin Stander. Set in a dystopian metropolis, the neo-noir storyline follows Subject Zero, a katana-wielding assassin with amnesia who can slow down time and predict the future. Zero unravels his past while completing assassination contracts.', logo:`${KatanaLogo}`, poster:''},
    {id:2,name:'Blasphemous',desc:'Blasphemous is a punishing action-platformer that combines the fast-paced, skilled combat of a hack-n-slash game with a deep and evocative narrative core, delivered through exploration of a huge universe comprised of non-linear levels.', logo:`${BlasphemousLogo}`, poster:''},
    {id:3,name:'Dead Cells',desc:"Dead Cells is a 2018 roguelike-Metroidvania game developed by Motion Twin and Evil Empire, and published by Motion Twin. The player takes the role of an amorphous creature called the Prisoner. As the Prisoner, the player must fight their way out of a diseased island in order to slay the island's King.", logo:`${DeadLogo}`, poster:''},
    {id:4,name:'Hollow Knight',desc:'Hollow Knight is a 2017 Metroidvania video game developed and published by independent developer Team Cherry. The player controls the Knight, an insectoid warrior exploring Hallownest, a fallen kingdom plagued by a supernatural disease.', logo:`${HollowLogo}`, poster:''},
    {id:5,name:'Moonscars',desc:'oonscars is a 2D side-scrolling platform game with Soulslike elements. Players take control of Grey Irma, a warrior made of clay and bone, who must track down her maker, a being called the Sculptor. To find the Sculptor, Irma must fight through a world inhabited by creatures made of clay, where most human civilization is in ruins.', logo:`${MoonLogo}`, poster:''},
]
export default function Games() {
  return (
    <>
        <h1>Games List: </h1>
        <ul>
            {games.map((game)=>(
                <li key={game.id}>
                    <Link to={`/games/${game.id}`} state={{game}}>
                        <img src={game.logo} alt="gamelogo" />
                        <strong>{game.name}</strong>
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}
