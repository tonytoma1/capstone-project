import Header from 'components/common/Header/Header';
import Footer from 'components/common/footer/Footer';

export default class Ordering extends React.Component {


    render() {
        return(
            <div>
                <h1>Orders</h1>
                <Header/>
                <Device/>
                <Footer/>
            </div>
        );
    }
}