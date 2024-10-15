import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const PetList = lazy(() => import('./pages/PetList'))
const PetDetail = lazy(() => import('./pages/PetDetail'))
const EditPet = lazy(() => import('./pages/EditPet'))
const AddPet = lazy(() => import('./pages/AddPet'))

function App() {
    const [petToEdit, setPetToEdit] = useState(null)

    return (
        <div className='App'>
            <Router>
                <h1>Pet Shelter</h1>

                <Routes>
                    <Route
                        path='/'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <PetList />
                            </Suspense>
                        }
                    />

                    <Route
                        path='/:petId'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <PetDetail setPetToEdit={setPetToEdit} />
                            </Suspense>
                        }
                    />

                    <Route
                        path='/:petId/edit'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <EditPet petToEdit={petToEdit} />
                            </Suspense>
                        }
                    />

                    <Route
                        path='/add'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddPet />
                            </Suspense>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
}

export default App
