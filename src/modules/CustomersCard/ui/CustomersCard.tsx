import { FC, memo } from 'react';
import './CustomersCard.scss';

interface ICustomersCard {
    cardText: string
    src: string
    namePerson: string
}

export const CustomersCard: FC<ICustomersCard> = memo(({
                                                           cardText,
                                                           src,
                                                           namePerson
                                                       }) => {
    return (
        <div className="card__customers__item">
            <div className="card__customers__text">
                <p>
                    {cardText}
                </p>
            </div>

            <div className="card__customers__person">
                <div className="card__customers__person__image">
                    <img src={src} alt=""/>
                    <span>{namePerson}</span>
                </div>
            </div>
        </div>
    );
});
