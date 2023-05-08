import * as SecureStore from 'expo-secure-store'

const nativeStorage = {
    setStringAsync(key, value){
        return SecureStore.setStringAsync(key, value);
    },
    
    getStringAsync(key){
        return SecureStore.getStringAsync(key);
    }, 

    deleteStringAsync(key){
        return SecureStore.deleteStringAsync(key);
    }
};

export default nativeStorage;