import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </div>
    );
}

export default App;
