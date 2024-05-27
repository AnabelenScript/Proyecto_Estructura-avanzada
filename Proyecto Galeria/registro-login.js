class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(data) {
        return this.inOrderSearch(this.root, data);
    }

    inOrderSearch(node, data) {
        if (node === null) {
            return false;
        }

        if (this.inOrderSearch(node.left, data)) {
            return true;
        }

        if (node.data === data) {
            return true;
        }

        return this.inOrderSearch(node.right, data);
    }
}

const userTree = new BinarySearchTree();

function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var registroForm = document.getElementById("registroForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registroForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registroForm.style.display = "block";
    }
}

document.getElementById("registrar").addEventListener('submit', function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("registerUsername").value;
    const newPassword = document.getElementById("registerPassword").value;

    if (!userTree.search(newUsername)) {
        userTree.add(newUsername);
        alert("Registro exitoso. Por favor, inicia sesión.");
    } else {
        alert("El usuario ya existe. Por favor, elija otro nombre de usuario.");
        return;
    }
});

document.getElementById("login").addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (userTree.search(username)) {
        alert("Iniciando sesión con: " + username);
        window.location.href = "inicio.html";
    } else {
        alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
});
