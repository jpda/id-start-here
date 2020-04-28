import { IMetadataItem, IContentItem } from '../model/Data';
import { IChoiceGroupOption } from 'office-ui-fabric-react';

export interface PickerState {
    verb: string;
    platform: string;
    lang: string;
    task: string;
    suggestion: string;
    sentence: string;
    ready: boolean;
    verbs: IMetadataItem[];
    verbOptions: IChoiceGroupOption[];
    platforms?: IMetadataItem[];
    platformOptions?: IChoiceGroupOption[];
    languages?: IMetadataItem[];
    langOptions?: IChoiceGroupOption[];
    tasks?: IMetadataItem[];
    taskOptions?: IChoiceGroupOption[];
    linkContent: IContentItem[];
    sampleContent: IContentItem[];
    mediaContent: IContentItem[];
}

export interface PickerProps {

}
