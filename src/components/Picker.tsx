import React from 'react';
import { IChoiceGroupOption, initializeIcons } from 'office-ui-fabric-react';
import { PickerState, PickerProps } from "./PickerState";

export class Picker extends React.Component<PickerProps, PickerState> {
    state: PickerState;
    constructor(props: PickerProps, state: PickerState) {
        super(props, state);
        this.state = { verb: "", platform: "", lang: "", task: "", suggestion: "", sentence: "", ready: false };
        initializeIcons();
    }
    verbChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ verb: option.key }, () => this.suggest());
        }
        this.suggest();
    };
    platformChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ platform: option.key }, () => this.suggest());
        }
        this.suggest();
    };
    langChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (option) {
            this.setState({ lang: option.key }, () => this.suggest());
        }
        this.suggest();
    };
    taskChange = (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
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