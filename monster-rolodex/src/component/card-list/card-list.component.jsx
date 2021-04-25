import './card-list.styles.css'
import {Card} from "../card/card.component";

export const CardList = (props) => {
    console.log(props);
    return (
        <div className='card-list'>
            {props.cardMonsters.map(
                monster => (
                    <Card key={monster.id} monster={monster}/>
                )
            )}
        </div>
    )
}