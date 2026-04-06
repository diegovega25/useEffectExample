import { createElement } from "react";
import { HTML_TAGS } from "@/shared/constants";

function UserList({ users }) {
    return createElement(
        HTML_TAGS.UL,
        null,
        users.map((user) => createElement(HTML_TAGS.LI, { key: user }, user))
    );
}

export default UserList;