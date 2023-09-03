export function addToLS(item) {
    if (!localStorage.getItem('items')) {
        localStorage.setItem('items', JSON.stringify([item]));
    } else {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items.find((it) => it.id === item.id)) {
            const existItem = items.find((it) => it.id === item.id);
            const existItemIndex = items.findIndex((it) => it.id === item.id);
            existItem.count += item.count;
            items.splice(existItemIndex, 1, existItem);
        } else {
            items.push(item);
        }
        localStorage.setItem('items', JSON.stringify(items));
    }
}

export function removeFromLS(id) {
    let items = JSON.parse(localStorage.getItem('items'));
    items = items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(items));
}

export function incrementLS(id) {
    let items = JSON.parse(localStorage.getItem('items'));

    const item = items.find((it) => it.id === id);
    const itemIndex = items.findIndex((it) => it.id === id);
    item.count++;

    items.splice(itemIndex, 1, item);
    localStorage.setItem('items', JSON.stringify(items));
}

export function decrementLS(id) {
    let items = JSON.parse(localStorage.getItem('items'));

    const item = items.find((it) => it.id === id);
    const itemIndex = items.findIndex((it) => it.id === id);
    if (item.count > 1) {
        item.count--;
        items.splice(itemIndex, 1, item);
    } else {
        items = items.filter((item) => item.id !== id);
    }

    localStorage.setItem('items', JSON.stringify(items));
}
