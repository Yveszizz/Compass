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

function SearchPos1({ panTo }) {
    const {ready, values, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location:{lat: () => 48.866667, lng: () => 2.333333 },
            radius: 200*1000,
        },
    });

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({address});
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng })
        } catch(error){
            console.log('error');
        }
    }
    
   return (
        <div className="search">
            <Combobox 
                onSelect={handleSelect}
            >
                <ComboboxInput 
                    value={values} 
                    onChange={(e)=> {
                        setValue(e.target.value)
                    }}
                    disable={ "false" /*!ready.toString()*/}
                    placeholder="Enter a adress"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map (({description, place_id}) => (
                            <ComboboxOption value={description} key={place_id} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default SearchPos1