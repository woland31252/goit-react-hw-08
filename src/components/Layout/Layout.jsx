import { Suspense } from 'react';
import css from '../Layout/Layout.module.css';
import AppBar from '../AppBar/AppBar.jsx';

export default function Layout({children}) {
    return (
        <div className={css.container}>
            <AppBar/>
            <Suspense fallback={<p>Loading page...</p>}>{children}</Suspense> 
        </div>
    )
}