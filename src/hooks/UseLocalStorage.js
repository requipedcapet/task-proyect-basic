import React from "react";
import { Storage } from "../components/StorageHandler";

function useLocalStorage (itemKey, defaultData) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState([]);

    React.useEffect(() => {
        try {
            setTimeout(() =>{
                let itemStorage = Storage.getData(itemKey);

                // useEfect just for load default data the first time in app no in re renders
                if (!itemStorage || !itemStorage.length) {
                    Storage.saveData(itemKey, defaultData);
                    itemStorage = defaultData;
                }
                
                saveItem(itemStorage);
                setLoading(false);
            }, 500)
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }, []);

    const saveItem = (data) => {
      Storage.saveData(itemKey, data);
      setItem(data);
    }
    
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };