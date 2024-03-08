const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const KategoriPage = require('../../pages/kategori.page')

describe('Kategori', () => {
    beforeEach(async () => {
        await Page.open('/')
        await LoginPage.login('mart99@mail.com','Qwerty123')
    })
    it('Tambah Kategori', async () => {
        await KategoriPage.kategori('minuman', 'minuman dari India')
    })
})