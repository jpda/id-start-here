import React from 'react';
import { Stack, DocumentCardLogo, DocumentCard, DocumentCardTitle, DocumentCardActivity, mergeStyles, IIconProps, IDocumentCardLogoProps, IDocumentCardStyles, IDocumentCardActivityPerson, IDocumentCardPreviewProps, ImageFit, DocumentCardPreview } from 'office-ui-fabric-react';
import { formatRelative } from 'date-fns'
import { Depths } from '@uifabric/fluent-theme';

interface IContentProps {
    href: string;
    title: string;
    logoIconNames?: string[];
    subTitle?: string;
    lastUpdated?: Date;
    people?: IDocumentCardActivityPerson[];
}

interface IMediaContentProps extends IContentProps {
    previewImageHref: string;
}

interface IContentState {
    state: string;
    other: string;
}

export class ContentItem<IContentProps, IContentState> extends React.Component<IContentProps, IContentState> {
    protected conversationTileClass = mergeStyles({ height: 182 });
    protected rocketIcon: IIconProps = { iconName: 'Rocket' };
    protected youtubeIcon: IIconProps = { iconName: 'youtube', };
    protected githubIcon: IIconProps = { iconName: 'github' };
    protected people: IDocumentCardActivityPerson[] = [{ name: 'ID devrel', profileImageSrc: '' }];
    protected icons: string[] = ["web"];
    protected lastUpdatedDate: number = Date.now();

    protected logoProps: IDocumentCardLogoProps = {
        logoIcon: 'Globe',
    };

    protected cardStyles: IDocumentCardStyles = {
        root: { display: 'inline-block', marginRight: 20, width: 320 },
    };

    public constructor(props: IContentProps, state: IContentState) {
        super(props, state);
    }
}

export class LinkContentItem extends ContentItem<IContentProps, IContentState> {
    public constructor(props: IContentProps, state: IContentState) {
        super(props, state);
        if (this.props.people) {
            this.people = this.props.people;
        }
        if (this.props.logoIconNames) {
            this.icons = this.props.logoIconNames;
        }
        if (this.props.lastUpdated) {
            this.lastUpdatedDate = this.props.lastUpdated.getDate();
        }
    }

    render() {
        return (
            <DocumentCard
                aria-label={this.props.title}
                styles={this.cardStyles}
                onClickHref={this.props.href}
                style={{ boxShadow: Depths.depth8 }}
            >
                <Stack horizontal>
                    {
                        this.icons.map((x, i) => {
                            return <DocumentCardLogo {... { key: i, logoIcon: x }} />
                        })
                    }
                </Stack>
                <div className={this.conversationTileClass}>
                    <DocumentCardTitle title={this.props.title} shouldTruncate />
                    <DocumentCardTitle title={this.props.subTitle ? this.props.subTitle : ""} showAsSecondaryTitle />
                </div>
                <DocumentCardActivity activity={"Last updated:" + formatRelative(this.lastUpdatedDate, new Date())} people={this.people} />
            </DocumentCard>
        );
    }
}

export class MediaContentItem extends ContentItem<IMediaContentProps, IContentState> {
    public constructor(props: IMediaContentProps, state: IContentState) {
        super(props, state);
        if (this.props.people) {
            this.people = this.props.people;
        }
        if (this.props.logoIconNames) {
            this.icons = this.props.logoIconNames;
        }
        if (this.props.lastUpdated) {
            this.lastUpdatedDate = this.props.lastUpdated.getDate();
        }
    }

    private cardPreviewProps: IDocumentCardPreviewProps = {
        previewImages: [
            {
                // previewIconContainerClass: "ms-DocumentCardPreview-Icon",
                // previewIconProps: this.youtubeIcon,
                previewImageSrc: this.props.previewImageHref,
                imageFit: ImageFit.cover,
                width: 318,
                height: 196,
            },
        ],
    };


    render() {
        return (
            <DocumentCard
                aria-label={this.props.title}
                onClickHref={this.props.href}
            >
                <DocumentCardPreview {...this.cardPreviewProps} />
                <DocumentCardTitle
                    title={this.props.title}
                    shouldTruncate={true}
                />
                <DocumentCardActivity
                    activity={"Published on " + formatRelative(this.lastUpdatedDate, new Date())}
                    people={this.people}
                />
            </DocumentCard>
        );
    }
}