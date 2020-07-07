import React from 'react';

import './DetailsInfo.css';
import SwapiServices from '../../services/SwapiServices';

export default class DetailsInfo extends React.Component {

    swapi = new SwapiServices();

    state = {
        item: null,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        if (!itemId)
            return;

        getData(itemId)
            .then((item) => {
                this.setState({ item });
            });
    }

    render() {

        const { item } = this.state;

        if (!item) {
            return (
                <div className="main-details-info">
                    <p>
                        Please, select item!
                    </p>
                </div>
            );
        }

        const { id, name } = item;
        const { itemInfo, srcImg } = this.props;

        const elements = itemInfo.map((key) => {
            return (
                <li key={key}>
                    <span className="info_title">{key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase() })}: </span>
                    <span className="info_content">{item[key]}</span>
                </li>
            );
        });

        return (
            <div className="main-details-info">
                <h3>{name}</h3>
                <div className="d-flex detail_info_block">
                    <img
                        alt="item"
                        src={srcImg + `${id}.jpg`}
                        onError={e => { e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg` }}
                    />
                    <ul className="info_block">
                        {elements}
                    </ul>
                </div>
            </div>
        );
    }
}

