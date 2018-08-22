interface IUser{
    name:string,
    password:string|number
}
interface IAction{
    type:string,
    user?:IUser
}
interface IState{
    state:IUser,
    action:IAction
} 

export const func = (data:IState) => {
    const {action,state} = data;
   switch(action.type){
        case "LOGIN_USER":
            return {...state,user:action.user};
        default:
            return false;
   }
}