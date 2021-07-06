export const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_ITEM':
            const newPeople = [...state.people, action.payload]
            return {
                ...state,
                people: newPeople,
                showModal: true, 
                modalContent: 'Person Added!'
            }

        case 'REMOVE_ITEM':  
            const newPeopleList = state.people.filter(person=> person.id !== action.payload)
            return {
                ...state,
                people: newPeopleList,
                showModal: true, 
                modalContent: 'Person Removed!'
            }
        
        case 'NO_VALUE':
            return {
                ...state,
                showModal: true, 
                modalContent: 'Please Insert a Name'
            }

        case 'CLOSE_MODAL':
            return {
                ...state,
                showModal: false, 
            }
    
        default:
            break;
    }
    return state
}