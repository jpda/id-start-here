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
                        </Stack>
                    </Stack>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-lg4">
                    <Stack horizontalAlign="center" gap={15}>
                        <Text variant="xxLarge" styles={this.boldStyle}>Docs</Text>
                        <Stack horizontal>
                            {this.state.linkContent.map((x, i) =>
                                <LinkContentItem href={x.href} title={x.title} key={i} subTitle={x.subTitle} lastUpdated={x.lastUpdated} logoIconNames={x.logoIconNames} people={[]} />
                            )}
                        </Stack>
                        <Text variant="xxLarge" styles={this.boldStyle}>Samples</Text>
                        <Stack horizontal>
                            {this.state.sampleContent.map((x, i) => {
                                return <LinkContentItem
                                    href={x.href}
                                    title={x.title}
                                    key={i}
                                    subTitle={x.subTitle}
                                    lastUpdated={x.lastUpdated}
                                    logoIconNames={x.logoIconNames}
                                    people={[]}
                                />
                            })}
                        </Stack>
                        <Text variant="xxLarge" styles={this.boldStyle}>Videos</Text>
                        <Stack horizontal>
                            {this.state.mediaContent.map((x, i) => {
                                return <MediaContentItem
                                    href={x.href}
                                    title={x.title}
                                    key={i}
                                    subTitle={x.subTitle}
                                    lastUpdated={x.lastUpdated}
                                    previewImageHref={x.previewImageHref ? x.previewImageHref : ""}
                                    people={[]}
                                />
                            })}
                        </Stack>
                    </Stack>
                </div>
            </div >
        )
    }
}


