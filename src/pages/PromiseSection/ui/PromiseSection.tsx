import { FC, memo } from 'react';
import { TitleSection } from 'components/TitleSection';
import { PromiseCard } from 'modules/PromiseCard';
import Card_1 from 'app/styles/image/promise/dog_love_63px.svg';
import Card_2 from 'app/styles/image/promise/dog_vet_63px.svg';
import Card_3 from 'app/styles/image/promise/dog_stream_63px.svg';
import './PromiseSection.scss';

interface IPromise {

}

export const PromiseSection: FC<IPromise> = memo(({}) => {
    return (
        <section className="section__promise">
            <div className="promise__container">
                <div className="promise__content content__promise">

                    <TitleSection
                        colorTitle={'#5D62B5'}
                        colorSubtitle={'#000'}
                        title={'OUR PROMISE TO YOU'}
                        subtitle={'Sed perspiciatis omnis iste natus'}
                    />

                    <div className="content__promise-items item__promise">
                        <PromiseCard
                            cardTitle={'24/7 Love & Care'}
                            cardSubtitle={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'}
                            src={Card_1}
                        />
                        <PromiseCard
                            cardTitle={'On-site Veterinarian'}
                            cardSubtitle={'Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'}
                            src={Card_2}
                        />
                        <PromiseCard
                            cardTitle={'Live-stream Cameras'}
                            cardSubtitle={'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.'}
                            src={Card_3}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
});
