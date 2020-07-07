class SwapiServices {

    _baseUrl = 'https://swapi.dev/api/';

    async getData(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
        if (!response.ok) {
            throw new Error(`We have a problem with fetch ${url}!!!`);
        }
        return await response.json();
    }

    getAllPeople = async () => {
        const response = await this.getData('people/');
        return response.results.map((this.transformPerson));
    }

    getAllPlanets = async () => {
        const response = await this.getData('planets/');
        return response.results.map((this.transformPlanet));
    }

    getAllStarships = async () => {
        const response = await this.getData('starships/');
        return response.results.map((this.transformStarship));
    }

    getAllFilms = async () => {
        const response = await this.getData('films/');
        return response.results.map((this.transformFilm)); 
    }

    getPerson = async (id) => {
        const person = await this.getData(`people/${id}/`);
        return this.transformPerson(person);
    }

    getPlanet = async (id) => {
        const planet = await this.getData(`planets/${id}/`);
        return this.transformPlanet(planet);
    }

    getStarship = async (id) => {
        const starship = await this.getData(`starships/${id}/`);
        return this.transformStarship(starship);
    }

    getFilm = async (id) => {
        const film = await this.getData(`films/${id}/`);
        return this.transformFilm(film);
    }

    transformPerson = (person) => {
        return ({
            id: this.getId(person),
            name: person.name,
            gender: person.gender,
            mass: person.mass,
            birthDate: person.birth_year
        })
    }

    transformPlanet = (planet) => {
        return ({
            id: this.getId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            gravity: planet.gravity,
        });
    }

    transformStarship = (starship) => {
        return (
            {
                id: this.getId(starship),
                name: starship.name,
                model: starship.model,
                passengers: starship.passengers,
                starshipClass: starship.starship_class
            }
        );
    }

    transformFilm = (film) => {
        return (
            {
                name: `Star Wars Episode ${film.episode_id}: ${film.title}`,
                id: this.getId(film),
                title: film.title,
                episodeId: film.episode_id,
                director: film.director,
                producer: film.producer,
                releaseDate: film.release_date,
            }
        );

    }

    getId(item) {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    }


}

export default SwapiServices;
