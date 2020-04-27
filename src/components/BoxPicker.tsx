import React from 'react';
import { ChoiceGroup, IChoiceGroupOption, Label, Stack, Text, FontWeights, IIconProps, PrimaryButton } from 'office-ui-fabric-react';
import { Picker } from './Picker';
import { MediaContentItem, LinkContentItem } from '../model/Types';

export default class BoxPicker extends Picker {
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
        { key: 'dotnet', text: 'dotnet', iconProps: { iconName: 'CSharp' } },
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

    render() {
        return (
            <div>
                <div className="ms-Grid-col ms-sm6">
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
                </div>
                <div className="ms-Grid-col ms-sm6 ms-lg4">
                    <Stack horizontalAlign="center" gap={15}>
                        <Text variant="xxLarge" styles={this.boldStyle}>
                            Docs
                        </Text>
                        <Stack horizontal>
                            <LinkContentItem
                                href="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"
                                title="Register an application with the Microsoft identity platform"
                                subTitle="In this quickstart, you register an application using the App registrations experience in the Azure portal."
                                logoIconNames={["DeveloperTools", "Globe", "CSharp", "Signin"]}
                                lastUpdated={new Date("2020-03-03")}
                            />
                            <LinkContentItem
                                href="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp"
                                title="Add sign-in with Microsoft to an ASP.NET Core web app"
                                subTitle="In this quickstart, you use a code sample to learn how an ASP.NET Core web app can sign in personal accounts (hotmail.com, outlook.com, others) and work and school accounts from any Azure Active Directory (Azure AD) instance."
                                logoIconNames={["DeveloperTools", "Globe", "CSharp", "Signin"]}
                                lastUpdated={new Date("2020-04-22")}
                            />
                        </Stack>
                        <Text variant="xxLarge" styles={this.boldStyle}>
                            Samples
                        </Text>
                        <LinkContentItem
                            href="https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/1-WebApp-OIDC/1-1-MyOrg"
                            title="An ASP.NET Core Web app signing-in users with the Microsoft identity platform in your organization"
                            subTitle="This sample shows how to build a .NET Core MVC Web app that uses OpenID Connect to sign in users. Users can only sign-in with their work and school accounts in their own organization. It leverages the ASP.NET Core OpenID Connect middleware."
                            logoIconNames={["github"]}
                            lastUpdated={new Date("2020-04-22")}
                        />
                        <Text variant="xxLarge" styles={this.boldStyle}>
                            Videos
                        </Text>
                        <MediaContentItem
                            href="https://www.youtube.com/watch?v=T0wS5wyGQco"
                            title="Adding authentication using Azure AD to your web apps and web APIs"
                            lastUpdated={new Date("2018-07-11")}
                            previewImageHref="https://i3.ytimg.com/vi/T0wS5wyGQco/hqdefault.jpg"
                        />
                    </Stack>
                </div>
            </div >
        )
    }
}


