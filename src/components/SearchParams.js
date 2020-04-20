import React , {useState , useEffect, useContext} from 'react'
import pet ,{ANIMALS} from "@frontendmasters/pet";
import useDropdown from "../hooks/useDropdown";
import Results from "./Results"
import ThemeContext from "./ThemeContext";
const SearchParams = () =>{

    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds]  = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animals", "dog" , ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);



    useEffect( () =>{
       setBreeds([]);
       setBreed("");
       pet.breeds(animal).then( ({breeds}) =>{
           const breedString = breeds.map(({name}) =>name);
           setBreeds(breedString);
       });

    }, [animal,setBreed, setBreeds]);

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        setPets(animals || []);
    }

    return(
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={ e =>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        type="text"
                        value={location}
                        placeholder="Location"
                        onChange={ e => setLocation( e.target.value)}/>
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={ e =>setTheme(e.target.value)}
                        onBlur={e =>setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark blue</option>
                        <option value="mediumorchid">Medium orchid</option>
                        <option value="chartreuse">Chartreuse</option>
                    </select>
                </label>

                <button style={{backgroundColor:theme}}>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    )
};
export default SearchParams;