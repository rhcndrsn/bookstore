<template>
    <nav class="navbar navbar-expand-md custom-nav">
        <div class="container">
            <a class="navbar-brand" href="/">{{ brandName.toUpperCase() }}</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="books">Books</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="register">Register</a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                brandName: "BookStore",
            }
        }
    }
</script>

<style scoped>
.custom-nav {
    background-color: #063547;
    padding: 15px 0;
}

.navbar-brand {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}

.nav-link {
    padding: 10px 25px;
    color: #fff;
    text-align: center;
}
</style>