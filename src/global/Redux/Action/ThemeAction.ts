import AsyncStorage from "@react-native-async-storage/async-storage";

 
export const setThemeAction = () =>{
    return async (dispatch:any)=>{
        try {
            const value = await AsyncStorage.getItem('Darkmode');
            await AsyncStorage.setItem('Darkmode', `${value=='true'?'false':'true'}`);
            const value2 = await AsyncStorage.getItem('Darkmode');
            await dispatch({
                type:'SET_THEME_ACTION',
                payload:value2
            })
             
          } catch (e) {
            console.log(e);
          }
    }
}

 

export const getThemeAction = ()=>{
   return async (dispatch:any)=>{
    try {
        const value = await AsyncStorage.getItem('Darkmode');
        if (value !== null) {
          dispatch({
              type:'GET_THEME_ACTION',
              payload:value
          })
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
      }
   }
}
