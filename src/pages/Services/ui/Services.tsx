import { FC, memo } from 'react';
import './Services.scss';
import { TitleSection } from 'components/TitleSection';
import { ServicesCard } from 'modules/ServicesCard';
import Item_1 from 'app/styles/image/services/dog_boarding_24x.svg';
import Item_2 from '../../../app/styles/image/services/dog_daycare_24x.svg';
import Item_3 from '../../../app/styles/image/services/dog_grooming_24x.svg';
import Item_4 from '../../../app/styles/image/services/dog_food_24x.svg';
import Item_5 from '../../../app/styles/image/services/dog_training_24x.svg';
import Item_6 from '../../../app/styles/image/services/dog_collar_24x.svg';
import { Button } from 'ui';

interface IServices {

}

export const Services: FC<IServices> = memo(({}) => {
    return (
        <section className="services">
            <div className="services__container">
                <div className="services__content content__services">
                    <TitleSection
                        title={'Our Services'}
                        colorTitle={'#5D62B5'}
                        subtitle={'Sed perspiciatis omnis iste natus'}
                        colorSubtitle={'#000'}
                    />

                    <div className="content__services-cards">

                        <ServicesCard
                            src={Item_1}
                            servicesTitle={'Pet Boarding (No Cages)'}
                            servicesSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                        />
                        <ServicesCard
                            src={Item_2}
                            servicesTitle={'Pet Daycare'}
                            servicesSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                        />
                        <ServicesCard
                            src={Item_3}
                            servicesTitle={'Pet Day Spa & Grooming'}
                            servicesSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                        />
                        <ServicesCard
                            src={Item_4}
                            servicesTitle={'Custom Meal Plans'}
                            servicesSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                        />
                        <ServicesCard
                            src={Item_5}
                            servicesTitle={'Pet Training'}
                            servicesSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                        />
                        <ServicesCard
                            src={Item_6}
                            servicesTitle={'Shop Our Store!'}
                            servicesSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                        />

                    </div>

                    <div className="content__services-btn">
                        <Button label={'Learn More'}/>
                    </div>

                </div>
            </div>
        </section>
    );
});
