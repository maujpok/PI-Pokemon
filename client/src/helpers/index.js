
export function orderByName(data) {
    data = data.sort(function(a, b) {
        if(a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    return data;
};

export function createJson(data1, data2) {
    data1.types = data2
    return data1;
};

