function CityList({ city, setCity }) {
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <main>
            <label>
                Select City:
                <select 
                    onChange={handleChange} 
                    value={city || ""}
                    style={{
                        marginLeft: '10px',
                        padding: '5px 10px'
                    }}
                >
                    <option value="">-- Choose a city --</option>
                    <option value="NewYork">New York</option>
                    <option value="London">London</option>
                    <option value="Tokyo">Tokyo</option>
                </select>
            </label>
        </main>
    );
}

export default CityList;