import './Nav.css';

function Nav(props) {
    return (
        <nav className='Nav'>
            <ul className='Nav-list'>
                {
                    Object.keys(props.navigation).map(
                        elem => {
                            return <li className='Nav-item' key={elem}><a className='Nav-link' href={props.navigation[elem]}>{elem}</a></li>
                        }
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;