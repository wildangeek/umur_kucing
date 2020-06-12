umurKucing = (umur) => {
    
    if (umur === 1) {
        return 15
    } else if (umur === 2) {
        return 24
    } else if (umur >=3) {
        return 24 + (umur-2)*4
    }
}