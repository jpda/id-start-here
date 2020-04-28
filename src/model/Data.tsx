import metadata from "../sampledata.json";

export interface IMetadataItem {
    item: string;
    text: string;
    icon: string;
    tags?: string[];
    aliases?: string[];
}

export class MetadataItem implements IMetadataItem {
    item: string;
    text: string;
    icon: string;
    tags?: string[];
    aliases?: string[];

    constructor(x: any) {
        this.item = x.item;
        this.text = x.text;
        this.icon = x.icon;
        this.tags = x.tags;
        this.aliases = x.aliases;
    }
}

export interface IContentItem {
    href: string;
    title: string;
    logoIconNames: string[];
    subTitle?: string;
    lastUpdated: Date,
    previewImageHref?: string;
    contentType: string;
    contentSource: string;
    contentWeight: string;
    tags: string[];
}

export class ContentItem implements IContentItem {
    href: string;
    title: string;
    logoIconNames: string[];
    subTitle?: string;
    lastUpdated: Date;
    previewImageHref?: string;
    contentType: string;
    contentSource: string;
    contentWeight: string;
    tags: string[];

    constructor(x: any) {
        this.href = x.href;
        this.title = x.title;
        this.logoIconNames = x.logoIconNames;
        this.subTitle = x.subTitle;
        this.lastUpdated = new Date(x.lastUpdated);
        this.previewImageHref = x.previewImageHref;
        this.contentType = x.contentType;
        this.contentSource = x.contentSource;
        this.contentWeight = x.contentWeight;
        this.tags = x.tags;
    }
}

export class Metadata {
    public verbs: IMetadataItem[];
    public platforms: IMetadataItem[];
    public languages: IMetadataItem[];
    public tasks: IMetadataItem[];
    public idps: IMetadataItem[];
    public contentItems: IContentItem[];

    constructor() {
        this.verbs = metadata.metadata.verbs.map((x) => {
            return new MetadataItem(x);
        });
        this.platforms = metadata.metadata.platforms.map((x) => {
            return new MetadataItem(x);
        });
        this.languages = metadata.metadata.languages.map((x) => {
            return new MetadataItem(x);
        });
        this.tasks = metadata.metadata.tasks.map((x) => {
            return new MetadataItem(x);
        });
        this.contentItems = metadata.content.map(x => {
            return new ContentItem(x);
        });
        this.idps = metadata.metadata.idps.map(x => {
            return new MetadataItem(x);
        });
    }
}

export class MetadataService {
    private _data: Metadata;

    constructor() {
        this._data = new Metadata();
    }

    public GetRootItems(): MetadataItem[] {
        return this._data.verbs;
    }

    public GetTaggedItems(parent: string, tags: string[]): IMetadataItem[] {
        var root: IMetadataItem[];
        console.log(parent + ": " + tags);

        switch (parent) {
            case "verb": {
                console.log("in verb");
                root = this._data.platforms;
                break;
            }
            case "platform": {
                console.log("in platform");
                root = this._data.languages;
                break;
            }
            case "lang": {
                console.log("in lang");
                root = this._data.tasks;
                break;
            }
            case "task":{
                console.log("in task");
                root = this._data.idps;
                break;
            }
            default: {
                console.log("in default");
                root = this._data.verbs;
            }
        }
        // there is absolutely a better way to do this
        // eslint-disable-next-line
        var ok = root.map(x => {
            var all = false;
            console.log(x);
            if (x.tags) {
                console.log(x.tags);
                for (var i = 0; i < tags.length; i++) {
                    console.log(tags[i]);
                    all = x.tags.includes(tags[i]);
                    if (!all) break;
                };
                if (all) return x;
            }
        });
        console.log(ok);
        var things = ok.filter(x => x !== undefined) as IMetadataItem[];
        return things;
    }

    public GetTaggedContent(category: string, tags: string[]): IContentItem[] {
        console.log("getting content for " + category + " for " + tags);

        var root = this._data.contentItems.filter(x => x.contentType === category && x !== undefined) as IContentItem[];

        // eslint-disable-next-line
        return root.map(x => {
            var a = false;
            for (var i = 0; i < tags.length; i++) {
                a = x.tags.includes(tags[i]);
                if (!a) break;
            }
            if (a) return x;
        }).filter(x => x !== undefined) as IContentItem[];

        // var ok = root.map(x => {
        //     var all = false;
        //     if (x.tags) {
        //         for (var i = 0; i < tags.length; i++) {
        //             all = x.tags.includes(tags[i]);
        //             if (!all) break;
        //         };
        //         if (all) return x;
        //     }
        // });
        // return ok.filter(x => x !== undefined) as IContentItem[];
    }
}