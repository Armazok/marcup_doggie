import { FC, memo } from 'react';
import 'components/Header/ui/Header.scss';
import { Button } from 'ui/Button/Button';
import Logo from 'app/styles/image/header/header-logo.svg';

interface IHeader {

}

export const Header: FC<IHeader> = memo(({}) => {
    return (
        <header className="header">
            <div className="header__content content__header">

                <a href={'/'} className="content__header-logo">
                    <img src={Logo} alt="header logo"/>
                </a>

                <div className="content__header-info info__header">

                    <div className="info__header__hourse">
                        <div className="info__header__hourse-body">
                            <p className="info__header__hourse-text ">
                                <span className="_icon-time-16px"/> BOARDING HOURS
                                <br/>Mon - Sat: 7:00 am - 6:00 pm
                            </p>
                        </div>
                    </div>

                    <div className="info__header__phone">
                        <div className="info__header__hourse-body">
                            <h2 className="info__header__hourse-text">
                                <span className="_icon-phone_16px"/> CALL US
                                <br/>(555) Pup-Cares
                            </h2>
                        </div>
                    </div>

                    <div className="info__header__btn">
                        <Button label={'Make an Appointment'}/>
                    </div>

                </div>

            </div>
        </header>
    );
});
