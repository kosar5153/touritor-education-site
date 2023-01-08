import React, { Component } from "react";

import { VictoryAnimation, VictoryLabel, VictoryPie } from "victory";

class PieChartCap extends Component {
  co =
    (this.props.signCap * 100) / (this.props.allCapacity + this.props.signCap);
  state = {
    percent: this.co,
    data: this.getData(0),
  };

  componentDidMount() {
    let percent =
      (this.props.signCap * 100) /
      (this.props.allCapacity + this.props.signCap);
    this.setStateInterval = window.setTimeout(() => {
      let percent =
        (this.props.signCap * 100) /
        (this.props.allCapacity + this.props.signCap);
      this.setState({
        percent,
        data: this.getData(this.props.signCap),
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: this.props.allCapacity },
    ];
  }

  render() {
    return (
      <div>
        {console.log(this.props.allCapacity, this.props.signCap)}
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={20}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  const color =
                    datum.y > 85 ? "rgb(226 ,62, 87)" : "rgb(163, 247, 191)";
                  return datum.x === 1 ? color : "rgb(39, 50 ,58)";
                },
              },
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default PieChartCap;
