import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class BarGraphic extends PureComponent<{data:any}> {

    render() {
        return (
            <BarChart
                width={350}
                height={200}
                data={this.props.data}
                margin={{
                    top: 40,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="done" fill="#8884d8" />
                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
        );
    }
}
