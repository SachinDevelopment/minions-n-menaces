import React, {useState} from 'react'
import creature1 from '../Assets/creatures/creature1.gif'
import creature2 from '../Assets/creatures/creature2.gif'
import creature3 from '../Assets/creatures/creature3.gif'
import creature4 from '../Assets/creatures/creature4.gif'
import creature5 from '../Assets/creatures/creature5.gif'

interface Props  {
  level: number
  setLevel: Function
}
const creatures = [creature1, creature2, creature3, creature4, creature5]
const getRandomCreature = () => {
  const rand = Math.floor(Math.random() * creatures.length + 1) - 1
  console.log(rand , creatures[rand])
  return creatures[rand]
}

const Minion = ({level, setLevel} : Props) => {
  const [health, setHealth] = useState(10)
  const [minion, setMinion] = useState(getRandomCreature())

  const handleHit = () => {
    //TODO health <= health - dmg dealt
    if(health <= 1){
      //Defeated
      setLevel(level + 1)
      setHealth(level * 10)
      setMinion(getRandomCreature())
    }else{
      setHealth(health - 1);
    }
  }

  return (
    <div className='border-2 border-black p-10' onClick={handleHit}>
      <div>Health: {health}</div>
      <img src={minion} alt="Creature" className='h-20 w-20'/>
    </div>
    )
}

export default Minion