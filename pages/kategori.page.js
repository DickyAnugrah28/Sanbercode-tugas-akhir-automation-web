class KategoriPage {
    get menuKategori(){
        return $('[href="/categories"] .css-1mqa38q');
    }
    get buttonTambah(){
        return $('//a[.="tambah"]');
    }
    get inputNamaKategori(){
        return $('#nama');
    }
    get inputDeskripsiKategori(){
        return $('#deskripsi');
    }
    get buttonSimpanKategori(){
        return $('//button[@class="chakra-button css-l5lnz6"]')
    }

    async kategori(namakategori, deskripsi){
        await this.menuKategori.click();
        await this.buttonTambah.click();
        await this.inputNamaKategori.setValue(namakategori);
        await this.inputDeskripsiKategori.setValue(deskripsi);
        await this.buttonSimpanKategori.click();

    }
}
module.exports = new KategoriPage();
