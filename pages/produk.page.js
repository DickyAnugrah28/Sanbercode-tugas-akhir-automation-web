class PembelianPage{
    get menuPembelian(){
        return $('//a[4]//div[@class="css-1mqa38q"]');
    }
    get tambahPembelian(){
        return $('//a[.="tambah"]');
    }
    get pilihProduk(){
        return $('.css-72nwfb');
    }
    get PilihProdukTaro(){
        return $('//td[.="Taro India"]');
    }
    get inputQty(){
        return $('//input[@value="1"]');
    }
    get simpanPembelian(){
        return $('.css-pu8osu');
    }
    async pembelian(qty){
        await this.menuPembelian.click();
        await this.tambahPembelian.click();
        await this.pilihProduk.click();
        await this.PilihProdukTaro.click();
        await this.inputQty.setValue(qty);
        await this.simpanPembelian.click();

    }
}
module.exports = new PembelianPage();