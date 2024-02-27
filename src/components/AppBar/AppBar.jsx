import { NavLink, Outlet } from 'react-router-dom';
import css from './AppBar.module.css';

const AppBar = () => {
    return (
        <>
            <header className={css.header}>
                <div className={css.container}>
                    <nav>
                        <ul className={css.list}>
                            <li>
                                <NavLink to="/" className={css.link}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cards" className={css.link}>
                                    Card List
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <div className={css.container}>
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default AppBar;
