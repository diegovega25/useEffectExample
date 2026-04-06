export function filterUsers(users, search) {
    const normalizedSearch = search.toLowerCase();

    return users.filter((user) =>
        user.toLowerCase().includes(normalizedSearch)
    );
}