import React, { PureComponent } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent<{
  data: any;
  field: String | undefined;
  kind: String | undefined;
}> {
  state = {
    data: this.props.data,
    activeIndex: 10000,
    prepareData: "",
    field: this.props.field,
    prevValues: "",
    kind: this.props.kind,
  };

  handleClick = (data: any, index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  mergeData = (done: any, waited: any) => {
    let finalObject = [];
    for (let wait of waited) {
      for (let d of done) {
        if (wait.name === d.name) {
          const temp = { ...wait, ...d };
          finalObject.push(temp);
        }
      }
    }
    return finalObject
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState !== prevProps) {
      this.setState({ prepareData: prevProps });
    }
    if (prevState === "") {
      if (this.state.kind === "Checks") {
        axios
          .get(
            `/checkmanip/untilDateAndMonth?field=${this.state.field}&today=${
              new Date().toISOString().split("T")[0]
            }`
          )
          .then((res) => {
            const values = res.data;
            this.setState({ prevValues: values });
          });
      } else if (this.state.kind === "Lubrificação") {
        axios
          .get(
            `/checkmanip/lubUntilDateAndMonth?field=${this.state.field}&today=${
              new Date().toISOString().split("T")[0]
            }`
          )
          .then((res) => {
            const values = res.data;
            this.setState({ prevValues: values });
          });
      }
    }
  }

  render() {
    this.componentDidUpdate(null, this.state.prevValues);
    const { activeIndex, data } = this.state;
    const orderByMachine: Object = data.reduce((acc: any, obj: any) => {
      let key = obj.machineName;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
    const machinesNames = Object.keys(orderByMachine);
    let prepareData = [];
    let index = 0;
    for (let machine of Object.values(orderByMachine)) {
      prepareData.push({
        name: machinesNames[index],
        valueUntilDate: Object.entries(machine).length,
      });
      index++;
    }
    prepareData = this.mergeData(
      Object.values(prepareData),
      Object.values(this.state.prevValues)
    );
    return (
      <>
        <ResponsiveContainer width="100%" height={600}>
          <BarChart data={prepareData}>
            <Tooltip isAnimationActive={false} />
            <XAxis
              dataKey="name"
              dy={100}
              dx={-10}
              interval={0}
              height={250}
              angle={-90}
            />
            <Bar
              barSize={50}
              dataKey="valueUntilDate"
              onClick={this.handleClick}
            >
              {data.map((entry: any, index: number) => (
                <Cell
                  cursor="pointer"
                  fill={
                    index === activeIndex
                      ? ""
                      : data[index]['valueUntilDate'] / data[index]['total'] >= 1
                      ? "#259A3D"
                      : "#D82B22"
                  }
                  key={`celluv-${index}`}
                />
              ))}
            </Bar>
            <Bar barSize={50} dataKey="total" onClick={this.handleClick}>
              {data.map((entry: any, index: number) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "" : "#4c85f4"}
                  key={`cellpv-${index}`}
                />
              ))}
            </Bar>
            <Bar barSize={50} dataKey="amt" onClick={this.handleClick}>
              {data.map((entry: any, index: number) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "" : "#07038C"}
                  key={`cellamt-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
