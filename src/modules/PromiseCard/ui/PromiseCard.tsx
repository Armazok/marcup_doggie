import { FC, memo } from 'react';
import './PromiseCard.scss';

interface IPromiseCard {
    src: string
    cardTitle: string
    cardSubtitle: string
}

export const PromiseCard: FC<IPromiseCard> = memo(({
                                                       src,
                                                       cardSubtitle,
                                                       cardTitle
                                                   }) => {
    return (
        <div className="item__promise__card card__promise">

            <div className="card__promise-bodyImage bodyImage__promise">
                <div className="bodyImage__promise__img">
                    <img src={src} alt="card"/>
                </div>
            </div>

            <div className="card__promise-bodyText bodyText__promise">
                <div className="bodyText__promise__title">
                    <span>{cardTitle}</span>
                </div>


                <div className="bodyText__promise__subtitle">
                    {cardSubtitle}
                </div>
            </div>

        </div>
    );
});
