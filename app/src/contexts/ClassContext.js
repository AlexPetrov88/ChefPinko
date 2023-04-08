import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useStorage } from '../hooks/useStorage';

import * as appService  from '../services/appService'; 

export const ClassContext = createContext();

export const ClassProvider = ({
    children,
}) => {
    const [ classes, setClasses ] = useState([]);
    //   const [ editData, setEditDate ] = useState({});
    //   const [ userState, setUserState ] = useState({});
      const navigate = useNavigate();

      useEffect(() => {
        appService.getAllClasses()
        .then(result => {
            console.log(result);
            setClasses(result)
        })
      }, []);
      
    const onCreateClass = async (data) => {
            // create newGame on server
            const newClass = await appService.postCreateClass(data);

            // update App state
            setClasses(state => [...state, newClass])

            // redirect to catalog
            navigate('/classes');
        }

    const onEditClass = async (id, data) => {
        // edit data on server
        const editClass = await appService.editClass(id, data); 

        // upDate state
        setClasses(state => state.map(c => c._id === id ? editClass : c));

        navigate(`/classes/${id}`);
        }


    const onDeleteClass = async (detailsId) => {
        const choice = window.confirm('Are you sure you want to delete this!');

        if (choice) {
            // Delet from server
            await appService.deleteClass(detailsId);

            // Delete from State
            setClasses(state => state.filter(c => c._id !== detailsId));
            navigate('/classes')
            }
        }

    const getClass = (classId) => {
            return classes.find(c => c._id === classId);
        };
        console.log(classes);
    const contextValues = {
        classes,
        onCreateClass,
        onEditClass,
        onDeleteClass,
        getClass,
    };

    return (
        <ClassContext.Provider value={contextValues}>
            {children}
        </ClassContext.Provider>
    );
};