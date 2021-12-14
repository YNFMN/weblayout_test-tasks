new JustValidate('.order__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    phone: {
      required: true,
			minLength: 9,
			maxLength: 9,
    },
  },
  messages: {
    name: 'Как вас зовут?',
    phone:'Укажите ваш телефон',
  },
  colorWrong: '#862973',
});
