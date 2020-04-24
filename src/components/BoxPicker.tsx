import React from 'react';
import { ChoiceGroup, IChoiceGroupOption, Fabric, initializeIcons, Label, Stack, Text, FontWeights, IIconProps, ActionButton } from 'office-ui-fabric-react';
import { PickerState } from './PickerState';
import { Props } from './Props';
import { Picker } from './Picker';

export default class BoxPicker extends Picker { // React.Component<Props, PickerState> {
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

