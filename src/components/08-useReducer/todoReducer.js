

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            //  en los arreglos se añade, en ves de sobreescribirse lo que ya
            return [...state, action.payload];
        case 'delete':
            // el filter, devuelve un nuevo arreglo solo con los que cumplan la condicion
            return state.filter( todo => todo.id !== action.payload);

        case 'toggle':
            return state.map( todo => 
                todo.id === action.payload
                    ? {...todo, done: !todo.done}
                    : todo
                );
        case 'toggle-old':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        // que retorne el mismo objeto pero con la prop done cambiada
                        ...todo, 
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            });
        default:
            return state;
    }
}