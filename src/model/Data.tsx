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

    public GetTaggedItems(parent: string, tag: string): IMetadataItem[] {
        var root: IMetadataItem[];
        console.log(parent + ": " + tag);
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

        var things = root.map((x) => {
            if (x !== undefined && x.tags && x.tags.includes(tag)) {
                //console.log(x);
                return x;
            }
        }).filter(x => x !== undefined) as IMetadataItem[];
        console.log(things);
        return things;
    }
}