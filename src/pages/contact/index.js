import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { motion } from "framer-motion";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactPageStyled = styled.section`
  min-width: 335px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: montserrat, sans-serif;
    font-size: 14px;
    font-weight: 400;
    span {
      font-size: 18px;
    }
  }

  form {
    width: 100%;
  }
`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileUpload = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const { location } = this.props;
    return (
      <Layout path={location.pathname}>
        <ContactPageStyled>
          <h1>
            based in <span> Oslo, Norway</span>
          </h1>
          <form
            name="contact-me"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            id="contact-form"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact-me" />
            <div hidden>
              <label>
                Don’t fill this out:
                <input name="bot-field" onBlur={this.handleChange} />
              </label>
            </div>
            <FormInput
              type="text"
              name="fullName"
              onBlur={this.handleChange}
              required={true}
              label="Your Name"
            ></FormInput>
            <FormInput
              type="email"
              name="email"
              onBlur={this.handleChange}
              required={true}
              label="Email"
            ></FormInput>
            <input
              type="file"
              name="example-image"
              id="input"
              onBlur={this.handleFileUpload}
              accept=".jpg, .jpeg, .png"
            ></input>
            <FormTextArea
              name="message"
              onBlur={this.handleChange}
              required={true}
              label="Your Message"
            ></FormTextArea>

            <div className="field">
              <button className="is-link" type="submit">
                Send
              </button>
            </div>
          </form>
        </ContactPageStyled>
      </Layout>
    );
  }
}
