import React, {Component} from 'react';

import {FormFieldWrapper, Input, CheckBox, Radio, TextArea} from './';

class Form extends Component {

    constructor(props) {
        super(props);
        this.initialValue = {
            value: '',
            isValid: null
        };
        this.state = {
            name: {...this.initialValue},
            email: {...this.initialValue},
            bio: {...this.initialValue},
            sex: {...this.initialValue},
            agree: {...this.initialValue}
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    handleOnChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        const fieldState = this.state[fieldName];
        fieldState.value = value;
        console.log(fieldState)
        this.setState({
            [fieldName]: fieldState
        });
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <FormFieldWrapper>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Imię"
                        onChange={this.handleOnChange}
                        value={this.state.name.value}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper>
                    <Input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={this.handleOnChange}
                        value={this.state.email.value}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper>
                    <TextArea
                        name="bio"
                        placeholder="Bio"
                        onChange={this.handleOnChange}
                        value={this.state.bio.value}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper className="radio warn-border">
                    <Radio
                        name="sex"
                        id="female"
                        label="Kobieta"
                        onChange={this.handleOnChange}
                        value={this.state.sex.value}
                    />

                    <Radio
                        name="sex"
                        id="male"
                        label="Mężczyzna"
                        onChange={this.handleOnChange}
                        value={this.state.sex.value}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper className="checkbox warn-border">
                    <CheckBox
                        name="agree"
                        id="agree"
                        label="Akceptuję regulamin"
                        onChange={this.handleOnChange}
                        value={this.state.agree.value}
                    />
                </FormFieldWrapper>





                <div>
                    <button>
                        Wyślij formularz
                    </button>
                </div>
            </form>
        );
    }

}

export default Form;
