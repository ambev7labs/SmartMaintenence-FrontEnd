import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent <{data:any}>{
  state = {
    data: this.props.data,
    activeIndex: 10000,
  };

  handleClick = (data: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;

    return (
      <>
        <ResponsiveContainer width="100%" height='85%'>
          <BarChart data={data}>
            <Tooltip isAnimationActive={false} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" dy={10} height={45} angle={-45} />
            <Bar barSize={50} dataKey="uv" onClick={this.handleClick}>
              {data.map((entry:any, index:number) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '' : (data[index].uv / data[index].pv   >= 1 ? '#259A3D' : '#D82B22' )}  key={`celluv-${index}`} />
              ))}
            </Bar>
            <Bar barSize={50} dataKey="pv" onClick={this.handleClick}>
              {data.map((entry:any, index:number) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '' : "#4c85f4"}  key={`cellpv-${index}`} />
              ))}
            </Bar>
            <Bar barSize={50} dataKey="amt" onClick={this.handleClick}>
              {data.map((entry:any, index:number) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '' : "#07038C"}  key={`cellamt-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
