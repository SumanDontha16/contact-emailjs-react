import React from "react";

const InputField = ({ label, value, name, type, handleChange }) => {
	return (
		<div className="mb-5">
			<label className="text-gray-500 text-sm" htmlFor={name}>
				{label}
			</label>
			<input
				className="border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2"
				type={type}
				value={value}
				name={name}
				onChange={handleChange}
				required
			/>
		</div>
	);
};

export default InputField;
