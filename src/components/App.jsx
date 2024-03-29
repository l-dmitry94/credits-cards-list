import Home from 'pages/Home';
import AppBar from './AppBar';
import Cards from 'pages/Cards';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const { Routes, Route } = require('react-router-dom');

const App = () => {
    const [cards, setCards] = useState([]);
    const id = nanoid()
    
    const onData = card => {
        setCards([{id, ...card}, ...cards]);
    };

    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<Home onData={onData} />} />
                <Route path="cards" element={<Cards cards={cards} />} />
            </Route>
        </Routes>
    );
};

export default App;
