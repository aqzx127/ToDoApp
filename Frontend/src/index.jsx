import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-qsh22qbc8oa4list.us.auth0.com"
        clientId="Fy6qbhZM9y9Kthy9Tm2mmvMMEzBHzqz4"
        authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://mytodosapi.com/"
        }}
        >
        <App />
    </Auth0Provider>
);
