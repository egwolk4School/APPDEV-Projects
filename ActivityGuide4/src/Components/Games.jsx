
import { Link } from 'react-router-dom'
import { KatanaLogo, BlasphemousLogo, HollowLogo, DeadLogo, MoonLogo, katanaposter, blasphemousposter, hollowknightposter,deadcellsposter, moonscarsposter } from '../assets/images';
const games=[
    {id:1,name:'Katana Zero',desc:'Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past in a beautifully brutal acrobatic display.', logo:`${KatanaLogo}`, poster:`${katanaposter}`},
    {id:2,name:'Blasphemous',desc:'Blasphemous is a brutal action-platformer with skilled hack’n slash combat set in the nightmare world of Cvstodia. Explore, upgrade your abilities, and perform savage executions on the hordes of enemies that stand between you and your quest to break eternal damnation.', logo:`${BlasphemousLogo}`, poster:`${blasphemousposter}`},
    {id:3,name:'Dead Cells',desc:"Dead Cells is a roguelite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you’re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.", logo:`${DeadLogo}`, poster:`${deadcellsposter}`},
    {id:4,name:'Hollow Knight',desc:'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.', logo:`${HollowLogo}`, poster:`${hollowknightposter}`},
    {id:5,name:'Moonscars',desc:'Push the limits of your combat skills, and master new abilities to progress through an unforgiving nonlinear 2D world. Face off against the relentless darkness that seeks to destroy you. In Moonscars, every death is a lesson learnt—and as you overcome each challenge, new truths will be revealed.', logo:`${MoonLogo}`, poster:`${moonscarsposter}`},
]


export const Games = () => {
  return (
    <>
        <div className="section">
            <div className="games-container">
                <h1>Games List: </h1>
                <ul className='gamesList'>
                    {games.map((game)=>(
                        <Link to={`/games/${game.id}`} state={{game}} key={game.id}>
                            <li >
                                <img src={game.logo} alt="gamelogo" width={150}/><br />
                                <strong>{game.name}</strong>
                            </li>
                        </Link>
                        
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}
