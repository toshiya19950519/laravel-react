import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React導入できたわな？？</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
                <Button color="secondary" variant="contained" href={`/`}>Homeに遷移ボタン</Button>
            </div>
        </div>
    );
}

export default Example;