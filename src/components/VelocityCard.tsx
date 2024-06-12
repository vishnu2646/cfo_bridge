import React from "react";
import Table from "./Table";

const VelocityCard = ({ title }: any) => {
    return (
        <div className="velocity-card-container">
            <h1 className="poppins-light">{title}</h1>
            <Table />
        </div>
    );
};

export default VelocityCard;
