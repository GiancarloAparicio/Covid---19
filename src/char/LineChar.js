import React from "react";
import { Line  } from "react-chartjs-2";

const LineChar=(props)=>{
    let data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio"],
        datasets: [
          {
            label: "Peru",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 0.5)",
            ],
            borderWidth: 2
          }
          /** Json() graficas **/
        ]
      };
    
      return (
        <div id="card">
            <p className="title">Casos confirmados</p>
          <Line 
            data={data}
            height={250}
            width={40}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      );
}

export default LineChar;