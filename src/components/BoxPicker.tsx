import React from 'react';
import { ChoiceGroup, Label, Stack, Text, FontWeights } from 'office-ui-fabric-react';
import { Picker } from './Picker';
import { MediaContentItem, LinkContentItem } from '../model/Types';
import { MotionAnimations } from '@uifabric/fluent-theme';

export default class BoxPicker extends Picker {
    private boldStyle = { root: { fontWeight: FontWeights.semibold } };

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
                            <ChoiceGroup options={this.state.verbOptions} onChange={this.verbChange} className={MotionAnimations.slideRightIn} />
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>a</Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.platformOptions} onChange={this.platformChange} className={MotionAnimations.slideRightIn} />
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>
                                        app using
                            </Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.langOptions} onChange={this.langChange} className={MotionAnimations.slideRightIn} />
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>
                                        and I need to
                            </Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.taskOptions} onChange={this.taskChange} />
                        </Stack>
                        <Stack horizontalAlign="center">
                            <Label>
                                <Stack horizontal verticalAlign="center">
                                    <Text variant="xxLarge" styles={this.boldStyle}>
                                        using
                            </Text>
                                </Stack>
                            </Label>
                            <ChoiceGroup options={this.state.idpOptions} onChange={this.idpChange} />
                        </Stack>
                        <Stack horizontalAlign="center" gap={15} hidden={!this.state.ready}>
                            <Text variant="xxLarge" styles={this.boldStyle} block>{this.state.sentence}</Text>
                        </Stack>
                    </Stack>
                </div>
                <div className="ms-Grid-col ms-sm6 ms-lg4">
                    <Stack horizontalAlign="center" gap={15}>
                        <Text variant="xxLarge" styles={this.boldStyle}>Docs</Text>
                        <Stack horizontal className={MotionAnimations.slideRightIn}>
                            {this.state.linkContent.map((x, i) =>
                                <LinkContentItem href={x.href} title={x.title} key={i} subTitle={x.subTitle} lastUpdated={x.lastUpdated} logoIconNames={x.logoIconNames} people={[]} />
                            )}
                        </Stack>
                        <Text variant="xxLarge" styles={this.boldStyle}>Samples</Text>
                        <Stack horizontal className={MotionAnimations.slideRightIn}>
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
                        <Stack horizontal className={MotionAnimations.slideRightIn}>
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


