import React from 'react';

import './PlanetsList.css';
import SwapiServices from '../../services/SwapiServices';
import withData from '../helpers/withData';

const PlanetsList = (props) => {

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
        <ul className="  ItemsList main-planets-list ">
            {elemets}
        </ul>
    );
}

const { getAllPlanets } = new SwapiServices();
export default withData(PlanetsList, getAllPlanets);