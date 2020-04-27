import React from 'react';
import { ChoiceGroup, IChoiceGroupOption, Label, Stack, Text, FontWeights, IIconProps, PrimaryButton, DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity, IDocumentCardPreviewProps, ImageFit, DocumentCardLogo, mergeStyles, IDocumentCardLogoProps, IDocumentCardStyles, IDocumentCardActivityPerson } from 'office-ui-fabric-react';
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

    // constructor(props: PickerProps, state: PickerState) {
    //     super(props, state);
    // }

    private conversationTileClass = mergeStyles({ height: 182 });
    private rocketIcon: IIconProps = { iconName: 'Rocket' };
    private youtubeIcon: IIconProps = { iconName: 'youtube', };
    private githubIcon: IIconProps = { iconName: 'github' };

    private logoProps: IDocumentCardLogoProps = {
        logoIcon: 'Globe',
    };

    private cardStyles: IDocumentCardStyles = {
        root: { display: 'inline-block', marginRight: 20, width: 320 },
    };

    private people: IDocumentCardActivityPerson[] = [
        { name: 'Annie Lindqvist', profileImageSrc: "" },
        { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
        { name: 'ID devrel', profileImageSrc: '' }
    ];

    private previewProps: IDocumentCardPreviewProps = {
        previewImages: [
            {
                name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                linkProps: {
                    href: 'http://bing.com',
                    target: '_blank',
                },
                // previewIconContainerClass: "ms-DocumentCardPreview-Icon",
                // previewIconProps: this.youtubeIcon,
                previewImageSrc: 'https://i3.ytimg.com/vi/T0wS5wyGQco/hqdefault.jpg',

                imageFit: ImageFit.cover,
                width: 318,
                height: 196,
            },
        ],
    };

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
                            <DocumentCard
                                aria-label={""}
                                styles={this.cardStyles}
                                onClickHref="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"
                            >
                                <Stack horizontal>
                                    <DocumentCardLogo {...{ logoIcon: "DeveloperTools" }} />
                                    <DocumentCardLogo {...{ logoIcon: "Globe" }} />
                                    <DocumentCardLogo {...{ logoIcon: "CSharp" }} />
                                    <DocumentCardLogo {...{ logoIcon: "Signin" }} />
                                </Stack>
                                <div className={this.conversationTileClass}>
                                    <DocumentCardTitle title="Register an application with the Microsoft identity platform" shouldTruncate />
                                    <DocumentCardTitle
                                        title="In this quickstart, you register an application using the App registrations experience in the Azure portal."
                                        showAsSecondaryTitle
                                    />
                                </div>
                                <DocumentCardActivity activity="Last updated: March 3, 2020" people={this.people} />
                            </DocumentCard>
                            <DocumentCard
                                aria-label={""}
                                styles={this.cardStyles}
                                onClickHref="https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp"
                            >
                                <Stack horizontal>
                                    <DocumentCardLogo {...{ logoIcon: "DeveloperTools" }} />
                                    <DocumentCardLogo {...{ logoIcon: "Globe" }} />
                                    <DocumentCardLogo {...{ logoIcon: "CSharp" }} />
                                    <DocumentCardLogo {...{ logoIcon: "Signin" }} />
                                </Stack>
                                <div className={this.conversationTileClass}>
                                    <DocumentCardTitle title="Add sign-in with Microsoft to an ASP.NET Core web app" shouldTruncate />
                                    <DocumentCardTitle
                                        title="In this quickstart, you use a code sample to learn how an ASP.NET Core web app can sign in personal accounts (hotmail.com, outlook.com, others) and work and school accounts from any Azure Active Directory (Azure AD) instance."
                                        showAsSecondaryTitle
                                    />
                                </div>
                                <DocumentCardActivity activity="Last updated: April 11, 2019" people={this.people} />
                            </DocumentCard>
                        </Stack>
                        <Text variant="xxLarge" styles={this.boldStyle}>
                            Samples
                        </Text>

                        <DocumentCard
                            aria-label={""}
                            styles={this.cardStyles}
                            onClickHref="https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/1-WebApp-OIDC/1-1-MyOrg"
                        >
                            <Stack horizontal>
                                <DocumentCardLogo {...{ logoIcon: "github" }} />
                                {/* <DocumentCardLogo {...{ logoIcon: "Globe" }} />
                                <DocumentCardLogo {...{ logoIcon: "CSharp" }} />
                                <DocumentCardLogo {...{ logoIcon: "Signin" }} /> */}
                            </Stack>
                            <div className={this.conversationTileClass}>
                                <DocumentCardTitle title="An ASP.NET Core Web app signing-in users with the Microsoft identity platform in your organization" shouldTruncate />
                                <DocumentCardTitle
                                    title="This sample shows how to build a .NET Core MVC Web app that uses OpenID Connect to sign in users. Users can only sign-in with their work and school accounts in their own organization. It leverages the ASP.NET Core OpenID Connect middleware."
                                    showAsSecondaryTitle
                                />
                            </div>
                            <DocumentCardActivity activity="Latest commit 5 days ago" people={this.people.slice(2)} />
                        </DocumentCard>

                        <Text variant="xxLarge" styles={this.boldStyle}>
                            Videos
                        </Text>
                        <DocumentCard
                            aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
                            onClickHref="https://www.youtube.com/watch?v=T0wS5wyGQco"
                        >
                            <DocumentCardPreview {...this.previewProps} />
                            <DocumentCardTitle
                                title={'Adding authentication using Azure AD to your web apps and web APIs'}
                                shouldTruncate={true}
                            />
                            <DocumentCardActivity
                                activity="Published on July 11, 2018"
                                people={[{ name: 'ID devrel', profileImageSrc: '' }]}
                            />
                        </DocumentCard>
                    </Stack>
                </div>
            </div >
        )
    }
}


