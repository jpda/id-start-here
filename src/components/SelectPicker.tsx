import React from 'react';
import { Fabric } from 'office-ui-fabric-react';
import Select from 'react-select';
import { Picker } from './Picker';

export default class SelectPicker extends Picker {
    private verbOptions = [
        { value: "build", label: "building" },
        { value: "deploy", label: "deploying" },
        { value: "run", label: "running" },
        { value: "mod", label: "modernizing" },
    ];
    private platformOptions = [
        { value: "web", label: "mobile" },
        { value: "desktop", label: "desktop" },
        { value: "mobile", label: "mobile" },
        { value: "headless", label: "headless" },
    ];
    private langOptions = [
        { value: "dotnet", label: "dotnet" },
        { value: "java", label: "java" },
        { value: "node", label: "node" },
        { value: "angular", label: "angular" },
    ];
    private taskOptions = [
        { value: "addAuth", label: "sign users in" },
        { value: "connectApi", label: "connect to a secure API" },
        { value: "useGraph", label: "access a user's graph data" },
        { value: "addAuth", label: "add authentication" },
        { value: "java", label: "java" },
        { value: "node", label: "node" },
        { value: "other", label: "something else" },
    ];

    render() {
        return (
            <Fabric>
                <div className="selectPicker" style={{ "width": "960px" }}>
                    <h1>I am</h1>
                    <Select options={this.verbOptions} style={{"font-size": "2em"}} />
                    <h1>a</h1>
                    <Select options={this.platformOptions} />
                    <h1>app using</h1>
                    <Select options={this.langOptions} />
                    <h1>and I need to</h1>
                    <Select options={this.taskOptions} isMulti={true} />
                    {/* </h1> */}
                </div>
            </Fabric>
        )
    }
}