import { Hero } from 'pages/Hero';
import { WhoWeAre } from 'pages/WhoWeAre';
import { PromiseSection } from 'pages/PromiseSection';
import { Video } from 'pages/Video';
import { Services } from 'pages/Services';
import { Appointment } from 'pages/Appointment';
import { Gallery } from 'pages/Gallery';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Hero/>
                <WhoWeAre/>
                <PromiseSection/>
                <Video/>
                <Services/>
                <Appointment/>
                <Gallery/>
                {/*<Footer/>*/}
            </div>
        </div>
    );
}

export default App;