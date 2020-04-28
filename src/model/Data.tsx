import metadata from "../sampledata.json";

export class Metadata {
    public verbs: IMetadataItem[];
    public platforms: IMetadataItem[];
    public languages: IMetadataItem[];
    public tasks: IMetadataItem[];

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
    }
}

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
            default: {
                console.log("in default");
                root = this._data.verbs;
            }
        }
        // there is absolutely a better way to do this
        // eslint-disable-next-line
        var ok = root.map(x => {
            var all = false;
            if (x.tags) {
                for (var i = 0; i < tags.length; i++) {
                    all = x.tags.includes(tags[i]);
                    if (!all) break;
                };
                if (all) return x;
            }
        });

        // var things = root.map(item => {
        //     if (item.tags && tags && tags.every(tag => {
        //         return tag !== undefined && item && item.tags && item.tags.includes(tag) > -1;
        //     })) {
        //         return item;
        //     }
        // })
        var things = ok.filter(x => x !== undefined) as IMetadataItem[];
        console.log(things);
        return things;
    }
}