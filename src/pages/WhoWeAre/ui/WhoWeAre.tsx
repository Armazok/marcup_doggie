import { FC, memo } from 'react';
import './WhoWeAre.scss';
import DogBg from '../../../app/styles/image/about/dog_bg.png';
import BlobBg from '../../../app/styles/image/about/blob_bg.png';
import { TitleSection } from 'components/TitleSection';

interface IAbout {

}

export const WhoWeAre: FC<IAbout> = memo(({}) => {
    return (
        <section className="whoWeAre">
            <div className="whoWeAre__container">
                <div className="whoWeAre__content content__whoWeAre">

                    <div className="whoWeAre__content__blob">
                        <img src={BlobBg} alt="blob"/>
                    </div>

                    <TitleSection
                        title={'Who we are'}
                        subtitle={'Nemo enim ipsam voluptatem quia voluptas in proident'}
                    />

                    <div className="content__whoWeAre-main main__section">
                        <div className="main__section__text">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi
                            ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea
                            voluptate
                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                            nulla
                            pariatur.
                        </div>
                        <div className="main__section__dog">
                            <img src={DogBg} alt="dog"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
