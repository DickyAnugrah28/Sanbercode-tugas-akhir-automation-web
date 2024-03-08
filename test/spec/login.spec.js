const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')

describe('Kasir aja Login', () => {
    beforeEach(async () => {
        await Page.open('/')
    })
    it('Login Berhasil', async () => {
        await LoginPage.login('mart99@mail.com', 'Qwerty123')

    })
    it('Login gagal', async () => {
        await LoginPage.login('mart99@mail.com', 'Qwerty')

        await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah')
        
    })
})