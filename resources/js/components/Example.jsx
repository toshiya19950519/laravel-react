import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">導入できたお</div>

                        <div className="card-body">I'm an example component!</div>
                        <Button color="primary" variant="contained">Hello World</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
