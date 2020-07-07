import React from 'react';

import './StarshipsList.css';
import SwapiServices from '../../services/SwapiServices';
import withData from '../helpers/withData';

const StarshipsList = (props) => {

    const { data, onItemClick, renderItem } = props;

    const renderItems = (arr) => {
        return (
            arr.map((item) => {
                const text = renderItem(item);
                return (
                    <li
                        key={item.id}
                        className="list-group-item custom-li"
                        onClick={() => onItemClick(item.id)}
                    >
                        {text}
                    </li>
                )
            })
        );
    }

    const elemets = renderItems(data);

    return (
        <ul className="main-starships-list">
            {elemets}
        </ul>
    );
}

const { getAllStarships } = new SwapiServices();
export default withData(StarshipsList, getAllStarships);