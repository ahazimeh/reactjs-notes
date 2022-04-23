//no to focus the input field you can just call
//emailInputRef.current.focus();
<Input
  ref={emailInputRef}
  id="email"
  label="E-Mail"
  type="email"
  isValid={emailIsValid}
  value={emailState.value}
  onChange={emailChangeHandler}
  onBlur={validateEmailHandler}
/>;
