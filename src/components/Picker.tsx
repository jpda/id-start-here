import React from 'react';
import { IChoiceGroupOption, initializeIcons } from 'office-ui-fabric-react';
import { PickerState, PickerProps } from "./PickerState";
import { MetadataService } from "../model/Data";

export class Picker extends React.Component<PickerProps, PickerState> {
    private metadataService: MetadataService;

    state: PickerState;
    constructor(props: PickerProps, state: PickerState) {
        super(props, state);

        this.metadataService = new MetadataService();
        this.state = {
            verb: "",
            platform: "",
            lang: "",
            task: "",
            idp: "",
            suggestion: "",
            sentence: "",
            ready: false,
            verbs: this.metadataService.GetRootItems(),
            verbOptions: this.metadataService.GetRootItems().map(x => {
                return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
            }),
            linkContent: [],
            sampleContent: [],
            mediaContent: []
        };
        initializeIcons();
    }
    verbChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            var plat = this.metadataService.GetTaggedItems("verb", [option.key]);
            this.setState({
                verb: option.key, platforms: plat, languages: [], tasks: [], idps: [], langOptions: [], platformOptions: [], taskOptions: [], linkContent: [], mediaContent: [], sampleContent: [], idpOptions: []
            }, () => this.suggest());
            this.setState({
                platformOptions: plat.map(x => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
        }
        this.suggest();
    };
    platformChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            var lang = this.metadataService.GetTaggedItems("platform", [this.state.verb, option.key]);
            this.setState({
                platform: option.key, languages: lang, tasks: [], idps: [], idpOptions: [], taskOptions: [], linkContent: [], mediaContent: [], sampleContent: []
            }, () => this.suggest());
            this.setState({
                langOptions: lang.map(x => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
        }
        this.suggest();
    };
    langChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            var task = this.metadataService.GetTaggedItems("lang", [this.state.verb, this.state.platform, option.key]);
            this.setState({ lang: option.key }, () => this.suggest());
            this.setState({ tasks: task });
            this.setState({
                taskOptions: task.map(x => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
        }
        this.suggest();
    };
    taskChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            var idps = this.metadataService.GetTaggedItems("task", [this.state.verb, this.state.platform, this.state.lang, option.key]);
            this.setState({ task: option.key }, () => this.suggest());
            this.setState({
                idpOptions: idps.map(x => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
            // this.setState({
            //     linkContent: this.metadataService.GetTaggedContent("link", [this.state.verb, this.state.platform, this.state.lang, option.key]),
            //     sampleContent: this.metadataService.GetTaggedContent("sample", [this.state.verb, this.state.platform, this.state.lang, option.key]),
            //     mediaContent: this.metadataService.GetTaggedContent("media", [this.state.verb, this.state.platform, this.state.lang, option.key]),
            // });
        }
    };

    idpChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ idp: option.key }, () => this.suggest());
            this.setState({
                linkContent: this.metadataService.GetTaggedContent("link", [this.state.verb, this.state.platform, this.state.lang, this.state.task, option.key]),
                sampleContent: this.metadataService.GetTaggedContent("sample", [this.state.verb, this.state.platform, this.state.lang, this.state.task, option.key]),
                mediaContent: this.metadataService.GetTaggedContent("media", [this.state.verb, this.state.platform, this.state.lang, this.state.task, option.key]),
            });
        }
    };

    itemChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ task: option.key }, () => this.suggest());
        }
    };

    suggest = () => {
        var result = "I am ";
        if (this.state.verb !== "") {
            result += this.state.verb + "ing a ";
        }
        if (this.state.platform !== "") {
            result += this.state.platform + " app using ";
        }
        if (this.state.lang !== "") {
            result += this.state.lang + " and I need to ";
        }
        if (this.state.task !== "") {
            result += this.state.task + " using ";
        }
        if(this.state.idp !== ""){
            result += this.state.idp;
        }
        this.setState({ sentence: result });
    };
}