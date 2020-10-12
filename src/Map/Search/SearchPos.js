import React, {Component} from 'react';

const SearchPos = (props) => {
    
    function foundLocation(location) {
        
    }
    
    const searchLocationHandler = (e) => {
        console.log(e.target.value);
        let location = '';
        if (e.keyCode===13){
            console.log("ok");
            location = e.target.value;
            //Activer la foncion recherche sur la map
            foundLocation(location);
        }
    }
    
    return (
        <div >
            <input 
                className="search-bar-input center"  
                type="text" 
                placeholder="Enter a location"
                //onChange=
                onKeyUp={searchLocationHandler} />
        </div>
    )
}

export default SearchPos;

