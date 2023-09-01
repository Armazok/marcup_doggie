import { FC, memo } from 'react';
import './ImpactCard.scss';

interface IImpactCard {
    src: string
    number: string
    text: string
}

export const ImpactCard: FC<IImpactCard> = memo(({
                                                     src,
                                                     number,
                                                     text
                                                 }) => {
    return (
        <div className="cards__impact__items item__impact">
            <div className="item__impact__img">
                <img src={src} alt=""/>
            </div>

            <div className="item__impact__content">
                <div className="item__impact__content__title">
                    <span>{number}</span>
                </div>
                <div className="item__impact__content__subtitle">
                    <span>{text}</span>
                </div>
            </div>
        </div>

    );
});
