 
const inisilizeState =  {
    theme: 'false'
}

export  const ThemeReducer = (state=inisilizeState , action:any)=>{
     switch (action.type) {
         case 'SET_THEME_ACTION':
             return {
                 ...state,
                 theme: action.payload
             }
        case 'GET_THEME_ACTION':
            return {
                ...state ,
                theme:action.payload
            }
    
        default:
              return state;
     }
}