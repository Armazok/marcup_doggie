import { FC, memo } from 'react';
import './TitleSection.scss';

interface ITitleSection {
    colorTitle?: string
    colorSubtitle?: string;
    title: string
    subtitle: string
}

export const TitleSection: FC<ITitleSection> = memo(({
                                                         colorTitle,
                                                         colorSubtitle,
                                                         title,
                                                         subtitle
                                                     }) => {
    return (
        <div className="content__section-header header__section">
            <div className="header__section__title" style={{color: colorTitle}}>{title}</div>
            <div className="header__section__subtitle" style={{color: colorSubtitle}}>{subtitle}</div>
        </div>
    );
});
