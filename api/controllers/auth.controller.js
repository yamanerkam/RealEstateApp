import bcrypt from 'bcrypt'
export const register = async (req, res) => {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    res.send('register contoller')
    console.log(hashedPassword)

}

export const login = (req, res) => {
    res.send('login contoller')
}

export const logout = (req, res) => {
    res.send('logout contoller')
}