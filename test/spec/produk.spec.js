const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const PembelianPage = require('../../pages/produk.page')

describe('Pembelian', () => {
    beforeEach(async () => {
        await Page.open('/')
        await LoginPage.login('mart99@mail.com','Qwerty123')
    })
    it('Tambah Pembelian', async () => {
        await PembelianPage.pembelian('0')
    })
})