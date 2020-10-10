import React from "react";
import PropTypes from "prop-types";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

const Wrapper = styled.div`
	${({ hasError }) =>
		hasError &&
		`
			border: 1px solid #f64d0a;
		`}
	.ck-editor__main {
		min-height: 200px;
		> div {
			min-height: 200px;
		}
	}
`;

const Editor = ({ onChange, name, value, hasError }) => {
	return (
		<Wrapper hasError={hasError}>
			<CKEditor
				editor={ClassicEditor}
				config={{
					removePlugins: ["image"],
				}}
				data={value}
				onChange={(event, editor) => {
					const data = editor.getData();
					onChange({ target: { name, value: data } });
				}}
			/>
		</Wrapper>
	);
};

Editor.propTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default Editor;
