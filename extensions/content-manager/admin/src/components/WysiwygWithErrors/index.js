import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Label, InputDescription, InputErrors } from "strapi-helper-plugin";
import Editor from "../CKEditor";

const WysiwygWithErrors = ({
	inputDescription,
	error,
	label,
	name,
	noErrorsDescription,
	onChange,
	value,
}) => {
	let spacer = !isEmpty(inputDescription) ? (
		<div style={{ height: ".4rem" }} />
	) : (
		<div />
	);

	if (!noErrorsDescription && !error) {
		spacer = <div />;
	}

	return (
		<div>
			<Label
				htmlFor={name}
				message={label}
				style={{ marginBottom: 10 }}
			/>
			{spacer}
			<Editor
				name={name}
				onChange={onChange}
				value={value}
				hasError={Boolean(error)}
			/>
			<InputDescription
				message={inputDescription}
				style={
					!isEmpty(inputDescription) ? { marginTop: "1.4rem" } : {}
				}
			/>
			<InputErrors
				errors={!noErrorsDescription && error ? [error] : []}
				name={name}
			/>
			{spacer}
		</div>
	);
};

WysiwygWithErrors.defaultProps = {
	errors: [],
	label: "",
	noErrorsDescription: false,
};

WysiwygWithErrors.propTypes = {
	errors: PropTypes.array,
	inputDescription: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.shape({
			id: PropTypes.string,
			params: PropTypes.object,
		}),
	]),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.shape({
			id: PropTypes.string,
			params: PropTypes.object,
		}),
	]),
	name: PropTypes.string.isRequired,
	noErrorsDescription: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default WysiwygWithErrors;
