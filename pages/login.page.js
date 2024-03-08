const { assertErrorMessage } = require("./register.page");

class LoginPage{
    get inputEmail(){
        return $('#email');
    }
    get inputPassword(){
        return $('#password');
    }
    get buttonLogin(){
        return $('//button[@class="chakra-button css-1n8i4of"]')
    }
    get errorMessage(){
        return $('//div[@class="chakra-alert css-qwanz3"]')
    }

    async login(email, password){
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);

    }
    async getErrorMessage(){
        return this.errorMessage.getText();
    }
}
module.exports = new LoginPage();
