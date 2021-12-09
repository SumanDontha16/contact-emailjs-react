import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import { ChevronRightIcon } from "@heroicons/react/solid";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const [values, setValues] = useState({
		fullName: "",
		email: "",
		role: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	// console.log(values);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.send(
				"service_8z7e5eq",
				"template_nj6oydf",
				values,
				"user_aQY8XsWOUSmjQTeKnlcAU"
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response);
					setValues({
						fullName: "",
						email: "",
						role: "",
						message: "",
					});
					setStatus("SUCCESS");
				},
				(error) => {
					console.log("ERROR!", error);
				}
			);
	};

	useEffect(() => {
		if (status === "SUCCESS") {
			setTimeout(() => {
				setStatus("");
			}, 3000);
		}
	}, [status]);

	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="xl:mt-48 xl:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
			{status && renderAlert()}
			<form onSubmit={handleSubmit}>
				<h3 className="text-gray-900 mb-7 text-xl font-semibold">
					{" "}
					Send us message{" "}
				</h3>
				<InputField
					value={values.fullName}
					label="Full Name"
					name="fullName"
					type="text"
					placeholder="John Doe"
					handleChange={handleChange}
				/>
				<InputField
					value={values.email}
					label="Email"
					name="email"
					type="email"
					placeholder="jphn@example.com"
					handleChange={handleChange}
				/>
				<SelectField handleChange={handleChange} name="role" label="Role" />
				<TextareaField
					value={values.message}
					handleChange={handleChange}
					label="Your message here"
					name="message"
				/>
				<button
					type="submit"
					className="mt-4 w-full bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
				>
					Send <ChevronRightIcon className="w-6 ml-2 float-right" />
				</button>
			</form>
		</div>
	);
};

const renderAlert = () => (
	<div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5">
		<p> Your message submitted successfully!!! </p>
	</div>
);

export default ContactForm;
