import React from "react";

const TextareaField = ({ handleChange, label, name, value }) => {
	return (
		<div>
			<label className="text-gray-500 text-sm" htmlFor={name}>
				{label}
			</label>
			<textarea
				value={value}
				onChange={handleChange}
				name={name}
				rows="4"
				className="w-full border-b-2 outline-none bg-gray-100 p-2"
			></textarea>
		</div>
	);
};

export default TextareaField;
