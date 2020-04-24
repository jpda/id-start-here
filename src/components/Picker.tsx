import React from 'react';
import { IChoiceGroupOption, initializeIcons } from 'office-ui-fabric-react';
import { Props } from "./Props";
import { PickerState } from "./PickerState";

export class Picker extends React.Component<Props, PickerState> {
    state: PickerState;
    constructor(props: Props, state: PickerState) {
        super(props, state);
        this.state = { verb: "none", platform: "none", lang: "none", task: "none", suggestion: "none" };
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
        if (this.state.verb === "build" && this.state.lang === "dotnet" && this.state.platform === "web" && this.state.task === "add-auth") {
            this.setState({ suggestion: "https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-aspnet-core-webapp" });
        }
    };
}
