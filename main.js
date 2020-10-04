// console.log(`tesaja`)

// kita buat sebuah fungsi register
const register = () => {

    // mendapatkan value dari input user
    let username = document.getElementById(`username`).value
    let password = document.getElementById(`password`).value

    // keluarkan apa yang di dapatkan
    //     alert(`
    // data yang ditangkap :
    // username : ${username}
    // password : ${password}    
    //     `)

    // kita simpan data user ke session storage
    sessionStorage.setItem("username", username)
    sessionStorage.setItem("password", password)


    // kita munculkan success pop up
    alert(`${username} berhasil di daftarkan`)


}

// kita buat fungtion login
const login = () => {

    // mencegah form langsung akses page lain
    event.preventDefault()

    // silahkan tangkap inputan user
    // lihat contoh di code atas ...

    let username = document.getElementById(`username`).value
    let password = document.getElementById(`password`).value

    // tangkap data di storage
    let db_username = sessionStorage.getItem(`username`)
    let db_password = sessionStorage.getItem(`password`)


    // verivikasi user input dengan database
    if (username === db_username && password === db_password) {
        alert(`selamat datang`)

        // tambahkan data bahwa ada yang sudah login
        sessionStorage.setItem(`isLogin`, true)

        // lempar user
        window.location.href = "home.html"

    } else {
        alert(`silahkan cek kembali username/password anda`)
        // menjadikan form tidak mengakses page lain
        return false
    }

}

