import { ContentCard, Topbar } from "../components";
import { ContentTemplate, TitleTemplate } from "../Templates";
import { dashboardInfo } from "../data/data";

const Debtor = ({locationState, setLocationState}: any) => {
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <>
            <Topbar>
                <div className='topbar-title-card'>
                    <TitleTemplate>
                        <p>Debtor's Overview - Monthly Report</p>
                    </TitleTemplate>
                </div>
                <div className='topbar-right-card'>
                    <ContentTemplate>
                        <span className='title poppins-semibold' style={{ color: 'var(--primary-gray-color)', fontWeight: 500, padding: '5px' }}>As of Date: {formattedDate}</span>
                    </ContentTemplate>
                </div>
            </Topbar>
            <div className="debtor-contents">
                <div className="debtor-info-cards">
                    {
                        dashboardInfo.map((data, index) => {
                            return (
                                <div className="debtor-info-card" key={index}>
                                    <span className="debtor-info-card-title">{data.title}</span>
                                    <span className="debtor-info-card-value">{data.value}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="debtor-content">
                    <ContentCard title={`${locationState === 'debtor-collection' ? 'Collection' : 'Sales'} during the Month`} />
                    <ContentCard title={`${locationState === 'debtor-collection' ? 'Collection' : 'Sales'} during the Month`} />
                </div>
            </div>
        </>
    );
};

export default Debtor;
