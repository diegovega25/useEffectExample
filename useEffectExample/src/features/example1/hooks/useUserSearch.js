import { useEffect, useState } from "react";
import {
    EMPTY_SEARCH,
    SEARCH_DELAY_MS,
} from "@/features/example1/constants";
import { fakeUsers } from "@/features/example1/data/fakeUsers";
import { filterUsers } from "@/features/example1/utils";

export function useUserSearch() {
    const [search, setSearch] = useState(EMPTY_SEARCH);
    const [users, setUsers] = useState([]);

    const loading = search !== EMPTY_SEARCH && users === null;
    const visibleUsers = users ?? [];

    useEffect(() => {
        if (search === EMPTY_SEARCH) {
            return;
        }

        const timeoutId = setTimeout(() => {
            const results = filterUsers(fakeUsers, search);

            setUsers(results);
        }, SEARCH_DELAY_MS);

        return () => clearTimeout(timeoutId);
    }, [search]);

    const handleSearchChange = (event) => {
        const value = event.target.value;

        setSearch(value);
        setUsers(value === EMPTY_SEARCH ? [] : null);
    };

    return {
        search,
        loading,
        users: visibleUsers,
        handleSearchChange,
    };
}