import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import "./Detail.css";
import Disqus from "disqus-react";


const Detail = (props) => {
const [chartData, setChartData] = useState({})

const chart = () =>{
  setChartData({
    labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    datasets: [
      {
        label: 'uptime',
        data: [98.3, 97.34, 94.12, 99.23, 89.20],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6'
        ],
        borderWidth: 4 
      }
    ]
  })
}

useEffect (() => {
  chart()
}, [])

const disqusShortname = "caucana";
  const disqusConfig = {
    url: `http://localhost:3000/${props.match.params.url}`,
    identifier: `http://localhost:3000/${props.match.params.url}`,
    title: "Title",
  };

  return (
    <section className="detail" >
      
      <h1 className="detail__title">Uptime evolution of {props.match.params.url}</h1>
      <div className="detail__chart">
        <Line data={chartData}/>
      </div>
      <div className="detail__comments">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
      

    </section>
  );
};

export default Detail;
