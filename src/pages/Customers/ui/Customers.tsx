import { FC, memo } from 'react';
import './Customers.scss';
import { TitleSection } from 'components/TitleSection';
import Blob from '../../../app/styles/image/customers/Blob 2.png';

interface ICustomers {

}

export const Customers: FC<ICustomers> = memo(({}) => {
    return (
        <section className="customers">
            <div className="customers__blob__img">
                <img src={Blob} alt=""/>
            </div>
            <div className="customers__container">
                <div className="customers__content content__customers">

                    <div className="content__customers-header">
                        <TitleSection
                            title={'OUR CUSTOMERS'}
                            colorTitle={'#5D62B5'}
                            subtitle={'Illum qui dolorem eum quo voluptas ut distinctio'}
                            colorSubtitle={'#000000'}
                        />
                    </div>


                    <div className="content__customers-card card__customers">

                        <div className="card__customers__item">
                            <div className="card__customers__text">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam,
                                    quis
                                    ea exercitation ullamco cillum ut enim dolore.”
                                </p>
                            </div>

                            <div className="card__customers__person">
                                <span>Cullen Bohannon</span>
                            </div>
                        </div>

                    </div>

                    <div className="content__customers-card card__customers">

                        <div className="card__customers__item">
                            <div className="card__customers__text">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam,
                                    quis
                                    ea exercitation ullamco cillum ut enim dolore.”
                                </p>
                            </div>

                            <div className="card__customers__person">
                                <span>Cullen Bohannon</span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
});
