import React, {Component} from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

function Search() {
    const {ready, values, suggestions: {status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
        requestOptions: {
            location:{lat: () => 48.866667, lng: ()=> 2.333333 },
            radius: 100*1000,
        }
    })
    
   return (
        <div className="search">
            <Combobox 
                onSelect={(adress)=>{
                    console.log(adress);
                }}
            >
                <ComboboxInput 
                    value={values} 
                    onChange={(e)=> {
                        setValue(e.target.value)
                    }}
                    disable={!ready}
                    placeholder="Enter a adress"
                />
                <ComboboxPopover>
                    {status === "OK" && data.map (({id, description}) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default Search;