import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from './pages/Example'; 
import Home from './pages/Home';
import PostEdit from './pages/PostEdit';

function App() {
return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/example" element={<Example />} />
                <Route path="/post/edit/:id" element={<PostEdit test="テスト"/>} />
            </Routes>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(
<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>
);

