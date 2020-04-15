import  React, {useState} from "react"

const useDropdown = (label, defaultState, options) =>{
    const [state , setState] = useState(defaultState);

    const id= `dropdown-${label.replace(" " ,"").toLocaleLowerCase()}`;
    const Dropdown = () =>(
        <label htmlFor={id}>
            {label}
            <select
                id={id}
                value={state}
                onChange={ e => setState( e.target.value)}
                onBlur={ e => setState(e.target.value)}
                disabled={options.length === 0}
            >
                <option>All</option>
                {
                    options.map( option =>(
                            <option key={option} value={option}>
                                {option}
                            </option>

                    ))
                }
            </select>
        </label>
    );
    return [state , Dropdown, setState];
};
export default useDropdown;