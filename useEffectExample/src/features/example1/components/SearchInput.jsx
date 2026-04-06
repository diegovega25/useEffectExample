import { createElement } from "react";
import {
    SEARCH_INPUT_TYPE,
    SEARCH_TEXTS,
} from "@/features/example1/constants";
import { HTML_TAGS } from "@/shared/constants";

function SearchInput({ value, onChange }) {
    return createElement(HTML_TAGS.INPUT, {
        type: SEARCH_INPUT_TYPE,
        placeholder: SEARCH_TEXTS.placeholder,
        value,
        onChange,
    });
}

export default SearchInput;