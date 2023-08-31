import { FC, memo } from 'react';
import './Nav.scss';
import Search from 'app/styles/image/search/search_24px.svg';
import Shopping from 'app/styles/image/search/shopping_cart_24px.svg';

interface INav {

}

export const Nav: FC<INav> = memo(({}) => {
    return (
        <nav className="nav">
            <div className="nav__content content__nav">

                <div className="content__nav-body-tabs tabs__nav">

                    <div className="tabs__nav__link">
                        Services
                    </div>

                    <div className="tabs__nav__link">
                        Specials
                    </div>

                    <div className="tabs__nav__link">
                        Facilities
                    </div>

                    <div className="tabs__nav__link">
                        Reviews
                    </div>

                    <div className="tabs__nav__link">
                        Shop
                    </div>

                    <div className="tabs__nav__link">
                        About
                    </div>


                </div>

                <div className="content__nav-body-search search__nav">
                    <div className="search__nav__lens">
                        <img src={Search} alt="serach"/>
                    </div>
                    <div className="search__nav__shop">
                        <img src={Shopping} alt="shopping"/>
                    </div>
                </div>
            </div>

            {/*<div className="mobile-btn">*/}
            {/*    <AiOutlineMenu size={50} color="red"/>*/}
            {/*</div>*/}
            {/*<AiOutlineClose/>*/}
        </nav>
    );
});
