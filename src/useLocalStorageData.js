import { useEffect, useState } from "react";

const localStorageKey = 'employees';

export const useLocalStorageEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const addEmployees = (employee) => {
        const completeEmployees = [...employees, employee];
        setEmployees(completeEmployees);
        localStorage.setItem(localStorageKey, JSON.stringify(completeEmployees));
    };

    const getEmployees = () => {
        const localStorageData = localStorage.getItem(localStorageKey);
        const data = localStorageData ? JSON.parse(localStorageData) : [];
        setEmployees(data);
    };

    const deleteEmployee = (id) => {
        const updated = employees.filter(emp => emp.id !== id);
        setEmployees(updated);
        localStorage.setItem(localStorageKey, JSON.stringify(updated));
    };

    return {
        employees,
        addEmployees,
        deleteEmployee
    };
};
