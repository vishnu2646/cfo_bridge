import { ContentCard, Topbar } from "../components";
import { ContentTemplate, TitleTemplate } from '../Templates';
import { dashboardInfo } from '../data/data';

const data: string[] = [
    "The Customer with the Highest Outstanding is 'Apurva Natvar Parikh & Co. Pvt. Ltd. with an Outstanding Balance of Rs.7.53 Lakhs",
    "The Customer with the Highest Sales is Square Business Services Private Limited with a Total Sales of Rs.1.36 Lakhs",
    "The Partner with the Highest Un-Recovered Customer Outstanding is 'Hitesh Kothari totalling to Rs.17.8 Lakhs",
    "The Customer with the Highest Collection is 'Spliceforms Enterprise Solutions Private Limited and the total collection is Rs.2.36 Lakhs"
]

const Home = () => {
    return (
        <>
            <Topbar>
                <div className='topbar-title-card'>
                    <TitleTemplate>
                        <p>Outstanding overview</p>
                    </TitleTemplate>
                </div>
                <div className='topbar-right-card'>
                    <ContentTemplate>
                        <span className='title poppins-semibold'>Days Sales <br /> Outstanding (DSO)</span>
                        <span className='count'>37</span>
                    </ContentTemplate>
                </div>
            </Topbar>
            <div className="home-container">
                <div className="home-info-card">
                    {dashboardInfo.map((data, index) => {
                        return (
                            <div key={index}>
                                <img src={data.image} alt="images" />
                                <div>
                                    <span>{data.title}</span>
                                    <span>{data.value}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="home-container-wrapper">
                    <div className="home-container-contents">
                        <ContentCard title="Customer with No Sales in the Past 3 Months but having oustanding"/>
                        <ContentCard title="Customers with with Outstanding more than 120 Days"/>
                    </div>
                    <div className="home-info-content-cards">
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='home-info-content-card'>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
