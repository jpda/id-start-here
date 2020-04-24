import React from 'react';
import { ChoiceGroup, IChoiceGroupOption, Fabric, initializeIcons, Label, Stack, Text, FontWeights, IIconProps, PrimaryButton } from 'office-ui-fabric-react';
import { PickerState } from './PickerState';
import { Props } from './Props';
import { Picker } from './Picker';

export default class BoxPicker extends Picker { // React.Component<Props, PickerState> {
    private boldStyle = { root: { fontWeight: FontWeights.semibold } };

    private verbOptions: IChoiceGroupOption[] = [
        { key: 'build', text: 'building', iconProps: { iconName: 'DeveloperTools' } },
        { key: 'deploy', text: 'deploying', iconProps: { iconName: 'CloudUpload' } },
        { key: 'run', text: 'running', iconProps: { iconName: 'Play' } },
        { key: 'moderniz', text: 'modernizing', iconProps: { iconName: 'Refresh' } },
        { key: 'integrat', text: 'integrating', iconProps: { iconName: 'TransitionPush' } },
    ];

    private platformOptions: IChoiceGroupOption[] = [
        { key: 'web', text: 'web', iconProps: { iconName: 'Globe' } },
        { key: 'desktop', text: 'desktop', iconProps: { iconName: 'Devices2' } },
        { key: 'mobile', text: 'mobile', iconProps: { iconName: 'CellPhone' } },
        { key: 'headless', text: 'headless', iconProps: { iconName: 'Server' } },
        { key: 'gaming', text: 'gaming', iconProps: { iconName: 'Game' } },
    ];

    private langOptions: IChoiceGroupOption[] = [
        { key: 'dotnet', text: 'dotnet', iconProps: { iconName: 'VisualStudioLogo' } },
        { key: 'java', text: 'Java', iconProps: { iconName: 'FileJAVA' } },
        { key: 'node', text: 'node', iconProps: { iconName: 'JS' } },
        { key: 'angular', text: 'angular', iconProps: { iconName: 'JS' } },
        { key: 'python', text: 'python', iconProps: { iconName: 'PY' } },
    ];

    private taskOptions: IChoiceGroupOption[] = [
        { key: 'add sign-in', text: 'sign users in', iconProps: { iconName: 'Signin' } },
        { key: 'connect to an api', text: 'secure API', iconProps: { iconName: 'PlugConnected' } },
        { key: 'use graph', text: 'add graph', iconProps: { iconName: 'OfficeLogo' } },
        { key: 'use sql', text: 'use a database', iconProps: { iconName: 'Database' }, },
        { key: 'control access', text: 'control access', iconProps: { iconName: 'Lock' } },
    ];

    private rocketIcon: IIconProps = { iconName: 'Rocket' };

    constructor(props: Props, state: PickerState) {
        super(props, state);
        initializeIcons();
    }

    render() {
        return (
            <Fabric>
                <Stack gap={15}>
                    <Stack horizontalAlign="center">
                        <Label>
                            <Stack horizontal verticalAlign="center">
                                <Text variant="xxLarge" styles={this.boldStyle}>
                                    I am
                            </Text>
                            </Stack>
                        </Label>
                        <ChoiceGroup options={this.verbOptions} onChange={this.verbChange} />
                    </Stack>
                    <Stack horizontalAlign="center">
                        <Label>
                            <Stack horizontal verticalAlign="center">
                                <Text variant="xxLarge" styles={this.boldStyle}>
                                    a
                            </Text>
                            </Stack>
                        </Label>
                        <ChoiceGroup options={this.platformOptions} onChange={this.platformChange} ></ChoiceGroup>
                    </Stack>
                    <Stack horizontalAlign="center">
                        <Label>
                            <Stack horizontal verticalAlign="center">
                                <Text variant="xxLarge" styles={this.boldStyle}>
                                    app using
                            </Text>
                            </Stack>
                        </Label>
                        <ChoiceGroup options={this.langOptions} onChange={this.langChange} ></ChoiceGroup>
                    </Stack>
                    <Stack horizontalAlign="center">
                        <Label>
                            <Stack horizontal verticalAlign="center">
                                <Text variant="xxLarge" styles={this.boldStyle}>
                                    and I need to
                            </Text>
                            </Stack>
                        </Label>

                        <ChoiceGroup options={this.taskOptions} onChange={this.taskChange} ></ChoiceGroup>
                    </Stack>
                    <Stack horizontalAlign="center" gap={15} hidden={!this.state.ready}>
                        <Text variant="xxLarge" styles={this.boldStyle} block>{this.state.sentence}</Text>
                        <PrimaryButton iconProps={this.rocketIcon} href={this.state.suggestion} disabled={!this.state.ready}>Let's go</PrimaryButton>
                    </Stack>
                </Stack>
            </Fabric >
        )
    }
}

