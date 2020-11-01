import React, { useState } from "react";

const Search = () => {
    // States
    const [search, setSearch] = useState("")


    return <div className="search">
        <input placeholder="Search for anything" type="text" value={search} onChange={e => setSearch(e.target.value)} />
    </div>
}

export default Search