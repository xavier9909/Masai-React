import React from 'react'

const Filters = ({ filters, currentFilterBy, updateFilter }) => {
    return (
        <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
                {Object.entries(filters).map(([key, value]) =>(
                 <div key={key}
                        className="restaurant-options"
                        onClick={() => updateFilter(key)}
                    >
                        {value}


                    </div>)
                )}

            </div>
        </div>
    )
}

export default Filters