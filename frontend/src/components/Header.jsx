import React from 'react'

const Header = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const logout = () => {
        localStorage.removeItem("userInfo");
        navigate("/login");
    };

    return (
        <header style={styles.header}>
            <div style={styles.leftNav}>
                <h1 style={styles.logo}>ShopAdmin</h1>
                {/* User Welcome Message */}
                {user && (
                    <div style={styles.userBadge}>
                        <span style={styles.userIcon}>👤</span>
                        <span style={styles.userName}>Hi, {user.name}</span>
                    </div>
                )}
            </div>

            <div style={styles.navButtons}>
                <button
                    style={styles.addButton}
                    onClick={() => navigate("/add-product")}
                >
                    + Add Product
                </button>
                <button style={styles.logoutButton} onClick={logout}>
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Header
