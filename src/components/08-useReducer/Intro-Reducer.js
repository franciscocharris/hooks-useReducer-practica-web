

console.log('hola reducer');

const tarea = [{
    id: 1,
    hacer: 'comer pan',
    done: false
}];

const toDoReducer = (state = tarea, action) => {

    if(action.type === 'agregar'){
        state = [...tarea, action.payload];
    }

    return state;
} 

const Nuevatarea = {
    id: 1,
    hacer: 'comer pan',
    done: false
}

const agregar = {
    type: 'agregar',
    payload: Nuevatarea
}

let toDos = toDoReducer(tarea, agregar);

console.log(toDos);