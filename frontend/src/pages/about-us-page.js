import React from 'react';
import Header from 'components/common/Header/Header_LP';
import Footer from 'components/common/footer/Footer';
import Banner from 'images/meeting.jpg';

export default class AboutUsPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <Header/>
                {/*Banner */}
                <div>
                    <img src={Banner} />
                    <h1>About Us</h1>
                </div>

                <Footer/>

            </div>
        );
    }
}