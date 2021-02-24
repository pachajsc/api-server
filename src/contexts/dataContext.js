import React from "react";
import { CourseServices } from "../services"

export const DataActionsContext = React.createContext();
const services = new CourseServices();

const DataActionsContextTag = ({ children }) => {
  const [allCourses, setAllCourses] = React.useState();
  const [courses, setCourses] = React.useState();
  const [notes, setNotes] = React.useState();
  React.useEffect( () =>
  {
    //AllCourses
    try {
      services
        .getAll()
        .then(res => {
          setAllCourses(res.data);
        })
        .catch(error => {
          console.log(error);
        });

    } catch (error) {
      console.log(error);
    }

    //Courses
    try {
      services
        .getCourse()
        .then(res => {
          setCourses(res.data);
        })
        .catch(error => {
          console.log(error);
        });

    } catch (error) {
      console.log(error);
    }

    //Notes
    try {
      services
        .getNotes()
        .then(res => {
          setNotes(res.data);
        })
        .catch(error => {
          console.log(error);
        });

    } catch (error) {
      console.log(error);
    }


  }, [setCourses, setAllCourses, setNotes] );
  
console.log('data all', allCourses)
console.log( 'data courses', courses )
console.log('data notes', notes)

return (
  <DataActionsContext.Provider value={{courses, setCourses}}>
    {children}
  </DataActionsContext.Provider>
  );
}

export default DataActionsContextTag;
