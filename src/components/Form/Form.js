import React, {Component} from 'react';

import {FormFieldWrapper, Input, CheckBox, Radio, TextArea} from './';

class Form extends Component {

    state = {
        name: '',
        email: '',
        bio: '',
        sex: '',
        agree: false,
        isValid: true,
        isSended: false
    }

    setStateAfterSend() {
        this.setState({
            name: '',
            email: '',
            bio: '',
            sex: '',
            agree: false,
            isValid: true,
            isSended: true
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    handleOnChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        this.setState({
            [fieldName]: value
        });
    }

    handleCheckboxOnChange = (e) => {
        const fieldName = e.target.name;
        const isChecked = e.target.checked;
        this.setState({
            [fieldName]: isChecked
        });
    }

    handleOnClick = () => {
        const {name, email, bio, sex, agree} = this.state;
        if(name && email && bio && sex && agree) {
            this.setStateAfterSend();
            this.disableThanks();
        } else {
            this.setState({
                isValid: false,
                isSended: false
            });
        }
    }

    disableThanks() {
        this.timer = setTimeout(() => {
            this.setState(
                {isSended: false}
            );
            clearTimeout(this.timer);
        }, 5000);
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <FormFieldWrapper
                    hideWarning={this.state.isValid || this.state.name}
                >
                    <Input
                        name="name"
                        type="text"
                        placeholder="Imię"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                        isValid={this.state.isValid}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper
                    hideWarning={this.state.isValid || this.state.email}
                >
                    <Input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={this.handleOnChange}
                        value={this.state.email}
                        isValid={this.state.isValid}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper
                    hideWarning={this.state.isValid || this.state.bio}
                >
                    <TextArea
                        name="bio"
                        placeholder="Bio"
                        onChange={this.handleOnChange}
                        value={this.state.bio}
                        isValid={this.state.isValid}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper
                    hideWarning={this.state.isValid || this.state.sex}
                    className={(this.state.isValid || this.state.sex) ? "radio" : "radio warn-border"}
                >
                    <Radio
                        name="sex"
                        id="female"
                        label="Kobieta"
                        onChange={this.handleOnChange}
                        value="Kobieta"
                        selected={this.state.sex}
                    />

                    <Radio
                        name="sex"
                        id="male"
                        label="Mężczyzna"
                        onChange={this.handleOnChange}
                        value="Mężczyzna"
                        selected={this.state.sex}
                    />
                </FormFieldWrapper>

                <FormFieldWrapper
                    hideWarning={this.state.isValid || this.state.agree}
                    className={(this.state.isValid || this.state.agree) ? "checkbox" : "checkbox warn-border"}
                >
                    <CheckBox
                        name="agree"
                        id="agree"
                        label="Akceptuję regulamin"
                        onChange={this.handleCheckboxOnChange}
                        value={this.state.agree}
                    />
                </FormFieldWrapper>

                {this.state.isSended && <h3>Dziękujemy za wysłanie</h3>}

                <div>
                    <button onClick={this.handleOnClick}>
                        Wyślij formularz
                    </button>
                </div>
            </form>
        );
    }

}

export default Form;
