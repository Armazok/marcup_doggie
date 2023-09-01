import { FC, memo } from 'react';
import './Customers.scss';
import { TitleSection } from 'components/TitleSection';
import Blob from '../../../app/styles/image/customers/Blob 2.png';
import Person_1 from '../../../app/styles/image/customers/person_1.svg';
import Person_2 from '../../../app/styles/image/customers/person_2.svg';
import { CustomersCard } from 'modules/CustomersCard';

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
                        <CustomersCard
                            cardText={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”'}
                            src={Person_1}
                            namePerson={'Cullen Bohannon'}
                        />
                    </div>

                    <div className="content__customers-card card__customers">
                        <CustomersCard
                            cardText={'“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ipsam voluptatem aspernatur.”'}
                            src={Person_2}
                            namePerson={'Jennifer Thomas'}
                        />
                    </div>


                </div>
            </div>
        </section>
    );
});
