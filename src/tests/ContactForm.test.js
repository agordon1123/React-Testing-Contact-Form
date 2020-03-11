import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

test("renders all fields", () => {
    // Arrange
    const { getByText } = render(<ContactForm />)

    // Act
    const firstName = getByText(/First Name/i)
    const lastName = getByText(/Last Name/i)
    const email = getByText(/Email/i)
    const message = getByText(/Message/i)

    // Assert
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()

    // render contains a debug method
    const wrapper = render(
        <>
            <ContactForm />
        </>
    )
    console.log(wrapper.debug())
})
