import { BrowserRouter as Router } from 'react-router-dom';
import MainApp from './componentes/MainApp';

function App() {
    return (
        <Router basename="/Starbucks">
            <MainApp />
        </Router>
    );
}

export default App;

