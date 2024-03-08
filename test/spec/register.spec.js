const Page = require('../../pages/page')
const RegisterPage = require('../../pages/register.page')

describe('Kasir aja Register', () => {
    beforeEach(async () => {
        await Page.open('/')

    })
    it('Register berhasil', async () => {
        await RegisterPage.register('Mart 99','mart99@mail.com','Qwerty123')
    })
    it('Register gagal dengan email tidak sesuai', async () => {
        await RegisterPage.register('Mart 77', 'mart77.com', 'Qwerty123')

        await RegisterPage.assertErrorMessage('"email" must be a valid email')
    })
    it('Register gagal dengan nama toko kosong', async () => {
        await RegisterPage.register('','mart99@gmail.com', 'Qwerty123')

        await RegisterPage.assertErrorMessage('"name" is not allowed to be empty')
    })
    it('Register gagal dengan password kosong', async () => {
        await RegisterPage.register('Mart 88', 'Mart88@mail.com', '')

        await RegisterPage.assertErrorMessage('"password" is not allowed to be empty')

    })
})