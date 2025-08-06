export async function fetchUsers() {
  try {
    const res = await fetch('https://6890f295944bf437b597da94.mockapi.io/user');
    const data = await res.json();
    return data;
  } catch {
    return [];
  }
}
