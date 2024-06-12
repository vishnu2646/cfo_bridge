import Table from "./Table";

const ContentCard = ({title, data, columns}: any) => {
    return (
        <div className="content-card">
            <div className="content-card-title">
                <h1 className="poppins-light">{title}</h1>
            </div>
            <div className="content-card-content">
                <Table data={data} columns={columns}/>
            </div>
        </div>
    );
};

export default ContentCard;
