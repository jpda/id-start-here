import React from 'react';
import { ChoiceGroup, Label, Stack, Text, FontWeights, IIconProps, PrimaryButton } from 'office-ui-fabric-react';
import { Picker } from './Picker';
import { MediaContentItem, LinkContentItem } from '../model/Types';

export default class BoxPicker extends Picker {
    private boldStyle = { root: { fontWeight: FontWeights.semibold } };
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
                            <ChoiceGroup options={this.state.verbOptions} onChange={this.verbChange} />
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>a</Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.platformOptions} onChange={this.platformChange} ></ChoiceGroup>
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>
                                        app using
                            </Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.langOptions} onChange={this.langChange} ></ChoiceGroup>
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>
                                        and I need to
                            </Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.taskOptions} onChange={this.taskChange} ></ChoiceGroup>
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


