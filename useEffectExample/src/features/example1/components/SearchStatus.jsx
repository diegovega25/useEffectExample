import { createElement } from "react";
import { EMPTY_SEARCH, SEARCH_TEXTS } from "@/features/example1/constants";
import { HTML_TAGS } from "@/shared/constants";

function SearchStatus({ loading, hasResults, search }) {
    return loading ? (
        createElement(HTML_TAGS.P, null, SEARCH_TEXTS.loading)
    ) : !hasResults && search !== EMPTY_SEARCH ? (
        createElement(HTML_TAGS.P, null, SEARCH_TEXTS.emptyResults)
    ) : null;
}

export default SearchStatus;