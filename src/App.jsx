import { useState } from 'react';
function SearchFilter() {
    const [query, setQuery] = useState('');
    const items = [
        'Clock',
        'Iphone',
        'tv',
        'laptop',
        'refrigirator',
        'mouse'
    ];
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div>
            <input
                type="text"
                placeholder="Search a items"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredItems.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
