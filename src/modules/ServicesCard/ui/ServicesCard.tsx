import { FC, memo } from 'react';
import './ServicesCard.scss';

interface IServicesCard {
    src: string
    servicesTitle: string
    servicesSubtitle: string
}

export const ServicesCard: FC<IServicesCard> = memo(({
                                                         src,
                                                         servicesTitle,
                                                         servicesSubtitle

                                                     }) => {
    return (
        <div className="content__services-card card__services">

            <div className="card__services__img">
                <img src={src} alt={src}/>
            </div>

            <div className="card__services__title">
                <h2>{servicesTitle}</h2>
            </div>

            <div className="card__services__subtitle">
                <p>
                    {servicesSubtitle}
                </p>
            </div>

        </div>
    );
});
