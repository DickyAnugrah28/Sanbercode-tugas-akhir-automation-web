class RegisterPage {

    get buttonDaftar(){
        return $('[href="/register"]');
    }
    get inputNamaToko(){
        return $('#name');
    }
    get inputEmail(){
        return $('#email');
    }
    get inputPassword(){
        return $('#password');
    }
    get buttonDaftarRegis(){
        return $('//button[@class="chakra-button css-1n8i4of"]')
    }
    get errorMessage() {
        return $('//div[@class="chakra-alert css-qwanz3"]');
    }

    async register(namatoko, email, password){
        await this.buttonDaftar.click();
        await this.inputNamaToko.setValue(namatoko);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonDaftarRegis.click();

    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);

    }
    async getErrorMessage(){
        return this.errorMessage.getText();
    }

}

module.exports = new RegisterPage();