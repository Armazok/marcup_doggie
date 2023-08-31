import { FC, memo } from 'react';
import { Button } from 'ui';
import './ContentHero.scss'

interface IContentHero {

}

export const ContentHero: FC<IContentHero> = memo(({}) => {
    return (
        <main className="main__content content__main">
            <div className="content__main__body">
                <p className="content__main__body__text">Premier dog boarding, daycare & day spa</p>
                <Button label={'Make an Appointment'}/>
            </div>
        </main>
    );
});
