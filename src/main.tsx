import ReactDOM from 'react-dom/client';
import App from './App';
import CustomThemeProvider from './ThemeProvider'; // Wrap with theme provider

const Main = () => (
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
