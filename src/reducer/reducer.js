const initialState = {
    persons: []
}

const reducer = (state = initialState, { type, payload }) => {
    const randomPerson = {
        id: Math.random()*Math.random(),
        name: ['Bob', 'Dan', 'Peter', 'Max', 'Ray', 'Rob'][~~(Math.random()*10) % 6],
        age: ~~(Math.random()*50)
    };
    
    switch (type) {
        case 'ADD': 
            return {
                ...state, 
                persons: [...state.persons, randomPerson]
            };
        case 'DEL': 
            return {
                ...state, 
                persons: state.persons.filter(({id}) => id !== payload)
        };
        default: return state
    }
}

export default reducer;