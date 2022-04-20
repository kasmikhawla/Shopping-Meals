import { Fragment } from 'react';
import img from '../../assets/img.jpg';
import '../Layout/Header.scss'
import HeaderCartButton from '../Layout/HeaderCartButton'

const Header =props => {
    return (
        <Fragment>
            <header className='header'>
                <h1>Shopping Cart</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className="main-img">
                <img src={img}/>
            </div>
        </Fragment>
    )
}

export default Header