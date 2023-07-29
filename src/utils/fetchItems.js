export const fetchItems = async (setItems) => {
    const response = await fetch(
        'https://64c0ffa1fa35860bae9fc1d2.mockapi.io/items'
    );
    const data = await response.json();
    setItems(data);
};
