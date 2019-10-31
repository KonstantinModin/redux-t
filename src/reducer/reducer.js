const initialState = {
    persons: []
}

const reducer = (state = initialState, { type, payload }) => {
    console.log('reducer doing things!');

    switch (type) {
        case 'ADD': {
            console.log(state, type, payload);
            const personName = payload.name ? 
                payload.name : 
                ['Bob', 'Dan', 'Peter', 'Max', 'Ray', 'Rob'][~~(Math.random() * 10) % 6];
            
                const personAge = payload.name ? 
                    payload.age : 
                    ~~(Math.random() * 50);

            const person = {
                id: Math.random() * Math.random(),
                name: personName,
                age: personAge
            };

            return {
                ...state,
                persons: [...state.persons, person]
            };
        }
        case 'DEL':
            return {
                ...state,
                persons: state.persons.filter(({id}) => id !== payload)
            };
        default:
            return state
    }
}

export default reducer;