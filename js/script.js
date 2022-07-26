class Form {
    constructor({ input, btn, form, inner, error,ty }) {
        this.input = document.querySelector(input);
        this.btn = document.querySelector(btn);
        this.form = document.querySelector(form);
        this.inner = document.querySelector(inner);
        this.error = document.querySelector(error);
        this.ty = document.querySelector(ty);

        this.button();
        this.error();
    }

    button() {
        this.btn.addEventListener('click', e => {
            e.preventDefault();
            if (this.input.value === '' || 
            this.input.value.indexOf('@') == -1 || 
            this.input.value.indexOf('.com') == -1)
            {
                this.input.classList.add('value0');
                this.inner.innerHTML = 'Please, provide a valid email!';
                this.error.classList.remove('d-none');
            } else {
                this.input.classList.remove('value0');
                this.error.classList.add('d-none');
                this.inner.innerHTML = '';
                localStorage.setItem('email', this.input.value);
                this.emailOk();
            }
        });
    }

    error() {
        if (this.input.value == '') {
            this.input.addEventListener('keypress', () => {
                this.input.classList.remove('value0');
                this.error.classList.add('d-none');
                this.inner.innerHTML = '';
            })
        }
    }

    emailOk() {
        this.form.classList.add('d-none');
        this.ty.innerHTML = `Thank you for your preference. <br><br>
        We are processing your order and soon you will receive the information in the email ${this.input.value}. <br> See you later!!`
    }
}

new Form ({
  input: '.input',
  btn: '.button',
  form: '.form',
  inner: '.inner',
  error: '.error',
  ty: '.thanks'
})