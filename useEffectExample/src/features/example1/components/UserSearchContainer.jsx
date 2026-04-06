import { createElement } from "react";
import { HTML_TAGS } from "@/shared/constants";
import { SEARCH_TEXTS } from "@/features/example1/constants";
import { useUserSearch } from "@/features/example1/hooks/useUserSearch";
import SearchInput from "@/features/example1/components/SearchInput";
import SearchStatus from "@/features/example1/components/SearchStatus";
import UserList from "@/features/example1/components/UserList";

function UserSearchContainer() {
    const { search, loading, users, handleSearchChange } = useUserSearch();

    return createElement(
        HTML_TAGS.DIV,
        null,
        createElement(HTML_TAGS.H1, null, SEARCH_TEXTS.title),
        createElement(SearchInput, {
            value: search,
            onChange: handleSearchChange,
        }),
        createElement(SearchStatus, {
            loading,
            hasResults: users.length > 0,
            search,
        }),
        createElement(UserList, { users })
    );
}

export default UserSearchContainer;