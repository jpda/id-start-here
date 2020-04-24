import React from 'react';
import { ChoiceGroup, IChoiceGroupOption, Fabric, initializeIcons, Label, Stack, Text, FontWeights, IIconProps, ActionButton } from 'office-ui-fabric-react';
//import { useId } from '@uifabric/react-hooks';
//import { useId } from 'office-ui-fabric-react';

interface Props {

}

interface PickerState {
    verb: string;
    platform: string;
    lang: string;
    task: string;
    suggestion: string;
}

export default class Picker extends React.Component<Props, PickerState> {
    // private verbOptions = [
    //     { value: "build", label: "building" },
    //     { value: "deploy", label: "deploying" },
    //     { value: "run", label: "running" },
    //     { value: "mod", label: "modernizing" },
    // ];
    // private platformOptions = [
    //     { value: "web", label: "mobile" },
    //     { value: "desktop", label: "desktop" },
    //     { value: "mobile", label: "mobile" },
    //     { value: "headless", label: "headless" },
    // ];
    // private langOptions = [
    //     { value: "dotnet", label: "dotnet" },
    //     { value: "java", label: "java" },
    //     { value: "node", label: "node" },
    //     { value: "angular", label: "angular" },
    // ];
    // private taskOptions = [
    //     { value: "addAuth", label: "sign users in" },
    //     { value: "connectApi", label: "connect to a secure API" },
    //     { value: "useGraph", label: "access a user's graph data" },
    //     { value: "addAuth", label: "add authentication" },
    //     { value: "java", label: "java" },
    //     { value: "node", label: "node" },
    //     { value: "other", label: "something else" },
    // ];

    private boldStyle = { root: { fontWeight: FontWeights.semibold } };

    private verbOptions: IChoiceGroupOption[] = [
        { key: 'build', text: 'building', iconProps: { iconName: 'DeveloperTools' } },
        { key: 'deploy', text: 'deploying', iconProps: { iconName: 'CloudUpload' } },
        { key: 'run', text: 'running', iconProps: { iconName: 'Play' } },
        { key: 'mod', text: 'modernizing', iconProps: { iconName: 'Calendar' } },
    ];

    private platformOptions: IChoiceGroupOption[] = [
        { key: 'web', text: 'web', iconProps: { iconName: 'Globe' } },
        { key: 'desktop', text: 'desktop', iconProps: { iconName: 'Devices2' } },
        { key: 'mobile', text: 'mobile', iconProps: { iconName: 'CellPhone' } },
        { key: 'headless', text: 'headless', iconProps: { iconName: 'Server' } },
    ];

    private langOptions: IChoiceGroupOption[] = [
        { key: 'dotnet', text: 'dotnet', iconProps: { iconName: 'VisualStudioLogo' } },
        { key: 'java', text: 'Java', iconProps: { iconName: 'FileJAVA' } },
        { key: 'node', text: 'node', iconProps: { iconName: 'JS' } },
        { key: 'angular', text: 'angular', iconProps: { iconName: 'JS' } },
        { key: 'python', text: 'python', iconProps: { iconName: 'PY' } },
    ];

    private taskOptions: IChoiceGroupOption[] = [
        { key: 'add-auth', text: 'sign users in', iconProps: { iconName: 'CalendarDay' } },
        { key: 'connect-api', text: 'connect to a secure API', iconProps: { iconName: 'CalendarWeek' } },
        { key: 'use-graph', text: 'access a user\'s graph data', iconProps: { iconName: 'Calendar' } },
        { key: 'angular', text: 'angular', iconProps: { iconName: 'Calendar' }, },
        { key: 'python', text: 'python', iconProps: { iconName: 'Calendar' } },
    ];

    state: PickerState;
    private rocketIcon: IIconProps = { iconName: 'Rocket' };

    constructor(props: Props, state: PickerState) {
        super(props, state);
        this.state = { verb: "none", platform: "none", lang: "none", task: "none", suggestion: "none" };
        initializeIcons();
    }

    componentDidMount() {

    }

    // genericize this
    verbChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ verb: option.key }, () => this.suggest());
        }
        this.suggest();
    }
    platformChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ platform: option.key }, () => this.suggest());
        }
        this.suggest();
    }
    langChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ lang: option.key }, () => this.suggest());
        }
        this.suggest();
    }
    taskChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ task: option.key }, () => this.suggest());
        }
    }

    suggest = () => {
        if (this.state.verb === "build" && this.state.lang === "dotnet" && this.state.platform === "web" && this.state.task === "add-auth") {
            this.setState({ suggestion: "https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp" })
        }
    }

    render() {
        return (
            <div>
                <Fabric>
                    <Label>
                        <Stack horizontal verticalAlign="center">
                            <Text variant="xxLarge" styles={this.boldStyle}>
                                I am
                            </Text>
                        </Stack>
                    </Label>
                    <ChoiceGroup options={this.verbOptions} onChange={this.verbChange} styles={{ flexContainer: { display: "flex" } }} />
                    <Label>
                        <Stack horizontal verticalAlign="center">
                            <Text variant="xxLarge" styles={this.boldStyle}>
                                a
                            </Text>
                        </Stack>
                    </Label>
                    <ChoiceGroup options={this.platformOptions} onChange={this.platformChange} ></ChoiceGroup>
                    <Label>
                        <Stack horizontal verticalAlign="center">
                            <Text variant="xxLarge" styles={this.boldStyle}>
                                app using
                            </Text>
                        </Stack>
                    </Label>
                    <ChoiceGroup options={this.langOptions} onChange={this.langChange} ></ChoiceGroup>
                    <Label>
                        <Stack horizontal verticalAlign="center">
                            <Text variant="xxLarge" styles={this.boldStyle}>
                                and I need to
                            </Text>
                        </Stack>
                    </Label>
                    <ChoiceGroup options={this.taskOptions} onChange={this.taskChange} ></ChoiceGroup>

                    {/* <h1>I am
                   <Select options={this.verbOptions} />
                    a
                    <Select options={this.platformOptions} />
                    app using
                    <Select options={this.langOptions} />
                    and I need to
                    <Select options={this.taskOptions} isMulti={true} />
                </h1> */}

                    <Stack gap={15} horizontalAlign="center">
                        <Text variant="mediumPlus">verb: {this.state.verb}</Text>
                        <Text variant="mediumPlus">plat: {this.state.platform}</Text>
                        <Text variant="mediumPlus">lang: {this.state.lang}</Text>
                        <Text variant="mediumPlus">task: {this.state.task}</Text>
                        <ActionButton iconProps={this.rocketIcon} href={this.state.suggestion}>Let's go</ActionButton>
                    </Stack>
                </Fabric>
            </div >
        )
    }
}

