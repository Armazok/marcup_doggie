import { FC, memo } from 'react';
import './Footer.scss';
import { Button } from 'ui';
import Logo_Ipsun from 'app/styles/image/footer/Logo-Placeholder-5.svg';

interface IFooter {

}

export const Footer: FC<IFooter> = memo(({}) => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content content__footer">

                    <div className="content__footer-head head__footer">
                        <div className="head__footer__title">
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className="head__footer__btn">
                            <Button label={'Make an Appointment'}/>
                        </div>
                    </div>

                    <div className="content__footer-wrapper">

                        <div className="content__footer-logo logo__footer">
                            <div className="logo__footer__img">
                                <img src={Logo_Ipsun} alt=""/>
                            </div>

                            <div className="logo__footer__text">
                                <p>
                                    This is a blurb about the company sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    ex magna aliqua.
                                </p>
                            </div>

                            <div className="logo__footer__social">
                                <a className="_icon-facebook" href=""/>
                                <a className="_icon-twitter" href=""/>
                                <a className="_icon-instagram" href=""/>
                                <a className="_icon-youtube" href=""/>
                            </div>
                        </div>

                        <div className="content__footer-links links__footer">
                            <div className="links__footer__title">
                                <span>EXPLORE LINKS</span>
                            </div>

                            <div className="links__footer-wrapper wrapper__links">

                                <div className="wrapper__links__blockOne">
                                    <a href="">About</a>
                                    <a href="">Services</a>
                                    <a href="">Specials</a>
                                    <a href="">Estimates</a>
                                </div>

                                <div className="wrapper__links__blockTwo">
                                    <a href="">Reviews</a>
                                    <a href="">Shop</a>
                                    <a href="">Careers</a>
                                    <a href="">FAQs</a>
                                </div>

                            </div>
                        </div>

                        <div className="content__footer-contact contact__footer">
                            <div className="contact__footer__title">
                                <span>Contact</span>
                            </div>

                            <div className="contact__footer__info">

                                <p className="contact__footer__info__place">
                                    <span className="_icon-place_16px"/>
                                    321 Pikes Place Parkway
                                    Seattle, WA 54321
                                </p>

                                <p className="contact__footer__info__phone">
                                    <span className="_icon-smartphone_16px"/>
                                    (555) 765-4321
                                </p>

                                <p className="contact__footer__info__email">
                                    <span className="_icon-email_16px"/>
                                    Info@company.com
                                </p>

                                <p className="contact__footer__info__time">
                                    <span className="_icon-timer_16px"/>
                                    Mon - Sat: 7:000 am - 6:00 pm
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="linear">
                <div className="linear__container">
                    <div className="linear__text">
                        <p>
                            Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                        </p>
                    </div>
                    <div className="linear__copyright">
                        <p>
                            © 2018 Company.
                            <span>
                        Privacy Policy | Terms & Conditions
                        </span>
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
});
