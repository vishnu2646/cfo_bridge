import React from "react";
import Table from "./Table";

const VelocityCard = ({ title, data, columns, loading, isFromPayment }: any) => {
    return (
        <div className="velocity-card-container" style={{ width: isFromPayment && "50%" }}>
            <h1 className="poppins-light">{title}</h1>
            <Table data={data} columns={columns} loading={loading} />
        </div>
    );
};

export default VelocityCard;
