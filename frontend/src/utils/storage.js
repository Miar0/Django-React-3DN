const STORAGE_KEY = 'announcements_pets';

export const getPetsFromStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const savePetToStorage = (pet) => {
    const current = getPetsFromStorage();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, pet]));
};

export const getPetById = (id) => {
    const all = getPetsFromStorage();
    return all.find((p) => p.id === Number(id));
};
