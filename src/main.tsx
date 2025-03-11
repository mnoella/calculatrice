import './style.css';
import { createRoot } from 'react-dom/client';
import CalculatorUI from './components/CalculatorUI';

// app
const root = createRoot(document.getElementById('app')!);
root.render(<CalculatorUI />);


