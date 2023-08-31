import { FC, memo } from 'react';
import './Gallery.scss';
import { TitleSection } from 'components/TitleSection';
import Bg_Gallery from 'app/styles/image/gallery/Image 1.png';

interface IGallery {

}

export const Gallery: FC<IGallery> = memo(({}) => {
    return (
        <section className="gallery">
            <div className="gallery__container">
                <div className="gallery__content content__gallery">

                    <TitleSection
                        title={'GALLERY & LIVE STREAMS'}
                        colorTitle={'#FFF'}
                        subtitle={'Check out our hard workers'}
                        colorSubtitle={'#FFF'}
                    />

                    <div className="content__gallery-main main__gallery">
                        <div className="main__gallery__items">
                            <div className="main__gallery__item">

                                <span className="main__gallery__item__text">Gallery</span>
                                <span className="main__gallery__item__text">Live stream: Yard 1</span>
                                <span className="main__gallery__item__text">Live stream: Yard 2</span>
                                <span className="main__gallery__item__text">Live stream: Yard 3</span>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="content__gallery-block block__gallery">
                    <div className="block__gallery__img">
                        <img src={Bg_Gallery} alt=""/>
                    </div>
                </div>

            </div>
        </section>
    );
});
