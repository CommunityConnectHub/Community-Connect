import React from 'react';
import "./Vstyles.css";

function Visualize(){
    return(
        <div className = "visualize-container">
            <h1>Checkout the visualization here!</h1><br></br>
            
            <iframe title="final_data" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=fea55fb6-03fd-4773-8618-37b4cfa638e0&autoAuth=true&ctid=9ff218eb-de4f-4e3e-95c4-d3cae83d933a" frameborder="0" allowFullScreen="true"></iframe>
        </div> 
    )
}

export default Visualize;