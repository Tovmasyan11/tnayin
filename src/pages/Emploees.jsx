

import React, { useState } from 'react';
import { Button, Box, AppBar, Toolbar, Typography } from '@mui/material';
import { TableRow, TableContainer, Table, TableHead, TableCell, TableBody, Paper } from '@mui/material';
import { useLocalStorageEmployees } from '../useLocalStorageData';

function createData(id, name, position, age) {
    return { id, name, position, age }
}

export default function ButtonAppBar() {
    const { employees, addEmployees, deleteEmployee } = useLocalStorageEmployees()

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [position, setPosition] = useState('')
    const [age, setAge] = useState('')

    const handleDelete = (id) => {
        deleteEmployee(id)
        setShowDeleteModal(false)
    }

    const handleAddEmployee = () => {
        if (!firstName || !lastName || !position || !age) {
            alert('Please fill all fields!')
            return;
        }

        const fullName = firstName + ' ' + lastName
        const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1
        const newEmployee = createData(newId, fullName, position, Number(age))

        addEmployees(newEmployee)

        setFirstName('')
        setLastName('')
        setPosition('')
        setAge('')
        setShowAddModal(false)
    }

    return (
        <div>
            <Box >
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Employees
                        </Typography>
                        <Button sx={{ color: 'white' }} onClick={() => setShowAddModal(true)}>
                            Add Employee
                        </Button>
                    </Toolbar>
                </AppBar>

                <TableContainer component={Paper} sx={{ marginTop: '100px' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell>Full Name</TableCell>
                                <TableCell>Position</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.position}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>
                                        <Button sx={{ color: 'red' }} onClick={() => {
                                            setSelectedId(row.id);
                                            setShowDeleteModal(true);
                                        }}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {showDeleteModal && (
                    <div style={{ position: 'fixed', bottom: '28%', right: '30%', width: '40%', height: '30%', borderRadius: '20px', backgroundColor: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', padding: '30px' }}>
                        <h1>Delete Employee</h1>
                        <h2>Are you sure you want to delete this employee?</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>

                            <Button sx={{ color: 'red' }} onClick={() => handleDelete(selectedId)}>Delete</Button>
                            <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>

                        </div>
                    </div>
                )}

                {showAddModal && (
                    <div style={{ position: 'fixed', right: '10%', width: '40%', height: '60%', borderRadius: '20px', backgroundColor: 'white', boxShadow: '4px 3px 4px 4px rgba(0,0,0,0.3)', padding: '30px' }}>
                        <h2>Add Employee</h2>
                        <div style={{ marginBottom: '20px' }}>
                            <h3>Last Name</h3>
                            <input style={{ height: '30px', width: '50%', borderRadius: '10px' }} value={lastName} onChange={(e) => setLastName(e.target.value)} />

                            <h3> First Name</h3>
                            <input style={{ height: '30px', width: '50%', borderRadius: '10px' }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h3>Position</h3>
                            <input style={{ height: '30px', width: '100%', borderRadius: '10px' }} value={position} onChange={(e) => setPosition(e.target.value)} />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <h3>Age</h3>
                            <input style={{ height: '30px', width: '50%', borderRadius: '10px' }} type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>

                            <Button sx={{ color: 'black' }} onClick={() => setShowAddModal(false)}>Cancel</Button>
                            <Button sx={{ color: 'blue' }} onClick={handleAddEmployee}>Add</Button>

                        </div>
                    </div>
                )}
            </Box>
        </div>
    )
}
