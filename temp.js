function h() {
    try {
        return 32;
    }
    finally {
        return 43;
    }
}

console.log(h());
