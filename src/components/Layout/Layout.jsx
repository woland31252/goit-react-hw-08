import { Suspense } from 'react';
// import Navigation from '../Navigation/Navigation.jsx';
import css from '../Layout/Layout.module.css';
import AppBar from '../AppBar/AppBar.jsx';

export default function Layout({children}) {
    return (
        <div className={css.container}>
            {/* <Navigation /> */}
            <AppBar/>
            <Suspense fallback={<p>Loading page...</p>}>{children}</Suspense> 
        </div>
    )
}