import { FC, memo } from 'react';
import './Hero.scss';
import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { ContentHero } from 'modules/ContentHero';

interface IMain {
}

export const Hero: FC<IMain> = memo(({}) => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__content content__main">
                    <Header/>
                    <Nav/>
                    <ContentHero/>
                </div>
            </div>
        </main>
    );
});
