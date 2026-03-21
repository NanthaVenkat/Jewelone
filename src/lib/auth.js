"use server";

const USER = {
    username: "admin",
    password: "12345",
};

export async function loginAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === USER.username && password === USER.password) {
        cookies().set("logged_in", "true", {
            httpOnly: true,
            path: "/",
        });

        return {
            success: true,
            message: null
        };
    }

    return {
        success: false,
        message: "Invalid username or password"
    };
}
export async function logoutAction() {
    const cookieStore = await cookies(); // ✅ allowed
    cookieStore.set("logged_in", "", {
        maxAge: 0
    }); // delete
}