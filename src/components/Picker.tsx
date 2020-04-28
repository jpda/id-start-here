import React from 'react';
import { IChoiceGroupOption, initializeIcons, ChoiceGroupOption } from 'office-ui-fabric-react';
import { PickerState, PickerProps } from "./PickerState";
import { MetadataService, MetadataItem } from "../model/Data";

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
            suggestion: "",
            sentence: "",
            ready: false,
            verbs: this.metadataService.GetRootItems(),
            verbOptions: this.metadataService.GetRootItems().map((x, i) => {
                return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
            })
        };
        initializeIcons();
    }
    verbChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ verb: option.key }, () => this.suggest());
            this.setState({ platforms: this.metadataService.GetTaggedItems("verb", option.key) });
            this.setState({
                platformOptions: this.metadataService.GetTaggedItems("verb", option.key).map((x, i) => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
        }
        this.suggest();
    };
    platformChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ platform: option.key }, () => this.suggest());
            this.setState({ languages: this.metadataService.GetTaggedItems("platform", option.key) });
            this.setState({
                langOptions: this.metadataService.GetTaggedItems("platform", option.key).map((x, i) => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
        }
        this.suggest();
    };
    langChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ lang: option.key }, () => this.suggest());
            this.setState({ tasks: this.metadataService.GetTaggedItems("lang", option.key) });
            this.setState({
                taskOptions: this.metadataService.GetTaggedItems("lang", option.key).map((x, i) => {
                    return { key: x.item, text: x.text, iconProps: { iconName: x.icon } };
                })
            });
        }
        this.suggest();
    };
    taskChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ task: option.key }, () => this.suggest());
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
            result += this.state.task;
        }
        this.setState({ sentence: result });

        if (this.state.verb === "build" && this.state.lang === "dotnet" && this.state.platform === "web" && this.state.task === "add sign-in") {
            this.setState({ suggestion: "https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp" });
            this.setState({ ready: true });
        }
    };
}