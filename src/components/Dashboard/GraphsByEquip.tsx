import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default class Example extends PureComponent<{data: any}> {
  
  handleClick = (data: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    let getName = (x:any) =>{return x ? (console.log(x),"isso aqui"): "" }
    return (
      <>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={this.props.data}>
            <Tooltip isAnimationActive={false} />
            <XAxis
              dataKey={getName}
              dy={110}
              dx={-10}
              interval={0}
              height={250}
              angle={-90}
            />
            <Bar
              barSize={50}
              dataKey="done.realizados"
              onClick={this.handleClick}
              label={{ position: "top" }}
            >
              {this.props.data && this.props.data.map((entry: any, index: number) => (
                <Cell
                  cursor="pointer"
                  fill="#259A3D"
                  key={`realizados-${index}`}
                />
              ))}
            </Bar>
            <Bar
              barSize={50}
              dataKey="wait.previstos"
              onClick={this.handleClick}
              label={{ position: "top" }}
              fill={"#4c85f4"}
            >
              {this.props.data && this.props.data.map((entry: any, index: number) => (
                <Cell
                  cursor="pointer"
                  fill={"#4c85f4"}
                  key={`previstos-${index}`}
                />
              ))}
            </Bar>
            {/*<Bar barSize={50} dataKey="amt" onClick={this.handleClick}>
              {data.map((entry: any, index: number) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "" : "#07038C"}
                  key={`cellamt-${index}`}
                />
              ))}
              </Bar>*/}
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
