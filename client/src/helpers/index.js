
export function fromAtoZ(a, b) {
    if(a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
 };

 export function fromZtoA(a, b) {
    if(a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
};

export function attackAsc(a, b) {
    if(a.attack > b.attack) return 1;
    if (a.attack < b.attack) return -1;
    return 0;
};

export function attackDesc(a, b) {
if(a.attack > b.attack) return -1;
if (a.attack < b.attack) return 1;
return 0;
};

export function createJson(data1, data2) {
    data1.types = data2
    return data1;
};

export const newPokemon = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: ""
};

export const redirect = (name) => {
    window.location.href = `/${name.toLowerCase()}`;
};