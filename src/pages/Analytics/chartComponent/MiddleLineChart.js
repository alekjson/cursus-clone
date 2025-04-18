import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "", // Ensuring the label is empty
        backgroundColor: "transparent",
        borderColor: "rgb(237, 42, 38)",
        data: [
          100, 1400, 3200, 900, 4500, 5400,
          1500, 7000, 3500, 2200, 3000, 1500
        ],
        lineTension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255,255,255,1)",
        pointHoverBackgroundColor: "rgba(255,255,255,1)",
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBorderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Correctly setting display to false
      }
    },
    layout: {
      padding: {
        right: 10
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: true,
          color: "#efefef",
          zeroLineColor: "#efefef"
        },
        ticks: {
          callback: function(value) {
            const ranges = [
              { divider: 1e6, suffix: "M" },
              { divider: 1e4, suffix: "k" }
            ];
            function formatNumber(n) {
              for (let i = 0; i < ranges.length; i++) {
                if (n >= ranges[i].divider) {
                  return (
                    (n / ranges[i].divider).toString() + ranges[i].suffix
                  );
                }
              }
              return n;
            }
            return formatNumber(value);
          }
        }
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
        label: function(tooltipItem, data) {
          return "$" + data.datasets[0].data[tooltipItem.index];
        }
      },
      responsive: true,
      intersect: false,
      enabled: true,
      titleFontColor: "#333",
      bodyFontColor: "#686f7a",
      titleFontSize: 12,
      bodyFontSize: 14,
      backgroundColor: "rgba(256,256,256,0.95)",
      xPadding: 20,
      yPadding: 10,
      displayColors: false,
      borderColor: "rgba(220, 220, 220, 0.9)",
      borderWidth: 2,
      caretSize: 10,
      caretPadding: 15
    }
  };

  return (
    <div style={{ position: 'relative', width: '1137px', height: '366px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
