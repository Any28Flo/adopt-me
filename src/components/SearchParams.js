import React , {useState , useEffect} from 'react'
import pet ,{ANIMALS} from "@frontendmasters/pet";
import useDropdown from "../hooks/useDropdown";
import Results from "./Results"
const SearchParams = () =>{

    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds]  = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animals", "dog" , ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    useEffect( () =>{
       setBreeds([]);
       setBreed("");
       pet.breeds(animal).then( ({breeds}) =>{
           const breedString = breeds.map(({name}) =>name);
           setBreeds(breedString);
       });

    }, [animal,setBreed, setBreeds]);

    const requestPets =  async () =>{
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        });

        setPets(animals || [])
    };

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

                <button>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    )
};
export default SearchParams;