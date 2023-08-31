import { FC, memo } from 'react';
import './Appointment.scss';
import { Button } from 'ui';

interface IAppointment {

}

export const Appointment: FC<IAppointment> = memo(({}) => {
    return (
        <section className="appointment">
            <div className="appointment__container">
                <div className="appointment__content content__appointment">

                    <div className="content__appointment-form form__appointment">
                        <div className="form__appointment__title">Make an appointment</div>

                        <form className="form__appointment__form" action="">

                            <div className="form__appointment__form__body">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className="form__appointment__input"
                                />
                                <input
                                    placeholder="Email"
                                    type="email"
                                    className="form__appointment__input"
                                />
                                <input
                                    placeholder="Phone Number"
                                    type="tel"
                                    className="form__appointment__input"
                                />
                                <input
                                    placeholder="Select Service"
                                    type="text"
                                    className="form__appointment__input"
                                />

                                <textarea
                                    placeholder="Tell us about your puppers include his/her name"
                                    className="form__appointment__textarea"
                                    rows={12}
                                    name=""
                                />
                            </div>

                            <div className="form__appointment__btn">
                                <Button type="submit" label={'Make an Appointment'}/>
                            </div>

                        </form>


                    </div>

                    <div className="content__appointment-info info__appointment">
                        <p className="info__appointment__title">Maxime placeat facere possimus omnis</p>

                        <span className="info__appointment__quantity">5,700+</span>

                        <span className="info__appointment__footer">customers served</span>
                    </div>

                </div>
            </div>
        </section>
    );
});
