import React from "react";
import { ListItem } from "../services/list.item.services";

export const DataActionsContext = React.createContext();

const DataActionsContextTag = ({ children }) => {
  const [courses, setCourses] = React.useState(ListItem);
  console.log(courses);

  return (
    <DataActionsContext.Provider value={}>
      {children}
    </DataActionsContext.Provider>
  );
};

export default DataActionsContextTag;
