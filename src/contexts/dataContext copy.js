import React from "react";
import { ListItem } from "../services/list.item.services";

export const DataActionsContext = React.createContext();

 const getCourses = async () => {
 const { data } = await ListItem.getListItems();
 return data
 };

const DataActionsContextTag = ({ children }) => {
const [courses, setCourses] = React.useState(getCourses);
//const [loading, setLoading] = React.useState(false);
//const [error, setError] = React.useState(false);
//const {data, status} = useQuery('contextData.courses', getCourses)
console.log('mi data', courses)

// React.useEffect(() => {
// if(status === "success"){setCourses(data)}
// if(status === "loading"){setLoading(true)}
// if(status === "error"){setError(true)}

// }, [setCourses,data, status]);
  
return (
<DataActionsContext.Provider value={{courses, setCourses}}>
{children}
</DataActionsContext.Provider>
);
}

export default DataActionsContextTag;
