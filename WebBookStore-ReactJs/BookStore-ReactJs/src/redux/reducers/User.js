
const InitialState = [
    {
        id:1,
        username: 'admin',
        password: 'admin'
    },
    {
        id:2,
        username: 'user',
        password: 'user'
    }
]

export default function User(state = InitialState, action){
    switch(action.type){
        default:
            return [...state];
    }
}