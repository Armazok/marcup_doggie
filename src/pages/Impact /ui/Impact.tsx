import { FC, memo } from 'react';
import { TitleSection } from 'components/TitleSection';
import Bg_Dog from 'app/styles/image/impact/bg__impact.png';
import Item_1 from 'app/styles/image/impact/dog_duckling_76px.svg';
import Item_3 from 'app/styles/image/impact/dog_duckling_76px.svg';
import Item_2 from 'app/styles/image/impact/dog_food_bowl_76x.svg';
import Item_4 from 'app/styles/image/impact/dog_leash_76x.svg';
import './Impact.scss';
import { ImpactCard } from 'modules/ImpactCard';

interface IImpact {

}

export const Impact: FC<IImpact> = memo(({}) => {
    return (
        <section className="impact">
            <div className="impact__container">
                <div className="impact__content content__impact">

                    <div className="content__impact-header header__impact">
                        <div className="header__impact_title">
                            <TitleSection
                                title={'OUR IMPACT'}
                                colorTitle={'#FFF'}
                                subtitle={'Nemo enim ipsam voluptatem quia voluptas'}
                                colorSubtitle={'#FFF'}
                                marginBottom={'0'}
                            />
                        </div>

                        <div className="header__impact__img">
                            <img src={Bg_Dog} alt=""/>
                        </div>
                    </div>

                    <div className="content__impact-cards cards__impact">

                        <ImpactCard
                            src={Item_1}
                            number={'3,700'}
                            text={'puppy baths'}
                        />

                        <ImpactCard
                            src={Item_2}
                            number={'4,500'}
                            text={'dogs boarded'}
                        />

                        <ImpactCard
                            src={Item_3}
                            number={'2,900'}
                            text={'pups trained'}
                        />

                        <ImpactCard
                            src={Item_4}
                            number={'12k+'}
                            text={'meals served'}
                        />

                    </div>

                </div>
            </div>
        </section>
    );
});
