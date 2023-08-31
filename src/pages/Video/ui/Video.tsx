import { FC, memo } from 'react';
import './VideoSection.scss';
import Bg_dog from '../../../app/styles/image/video/dog.png';
import { Button } from 'ui';

interface IVideoSection {

}

export const Video: FC<IVideoSection> = memo(({}) => {
    return (
        <section className="video">
            <div className="video__container">
                <div className="video__content content__video">

                    <div className="content__video-blockone blockone__video">
                        <div className="blockone__video__img">
                            <img src={Bg_dog} alt="dog"/>
                        </div>
                    </div>

                    <div className="content__video-blocktwo blocktwo__video">
                        <div className="blocktwo__video__title">
                            Nemo enim ipsam voluptatem quia voluptas in proident
                        </div>
                        <div className="blocktwo__video__btn">
                            <Button label={'Make an Appointment'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
