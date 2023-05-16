import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../../Component/Login';

describe('<Login />', () => {
    it("renders text input correctly", () => {
        const tree = renderer.create(<ThemeProvider theme={themes.default}><Login /></ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
      });

    it("calls onLogin when button clicked", () => {
        const onSubmitMock = jest.fn();
    
        const component = Enzyme.mount(
          <ThemeProvider theme={themes.default}><Login onPress={onSubmitMock} /></ThemeProvider>
        );
    
        component.find("input.E-mail").simulate('change', { target: { value: 'myUser' } })
        component.find("input.Password").simulate('change', { target: { value: 'myPassword' } })
        component.find("text.Login").simulate("onPress");
    
        console.log("onClickMock.mock", onSubmitMock.mock)
        expect(onSubmitMock).toBeCalled()
    });

  //verify if the user can loggin wiht a valid password and a valid e-mail
  it("submits username and password", () => {
    const username = "popescu.ioan@yahoo.com";
    const password = "pleaseWork123";
    const onSubmitMock = jest.fn();
    
    const component = Enzyme.mount(
      <ThemeProvider theme={themes.default}><Login onPress={onSubmitMock} /></ThemeProvider>
    );

    component.find("input.E-mail").simulate('change', { target: { value: username } })
    component.find("input.Password").simulate('change', { target: { value: password } })
    component.find("text.Login").simulate("onPress");

    console.log("onClickMock.mock", onSubmitMock.mock)
    expect(onSubmitMock).toBeCalled()
    expect(onSubmitMock).toHaveBeenCalledWith({
        username,
        password
        });
    });

  //verify if the user can loggin wiht a valid password and a invalid e-mail (without @)
  it("submits username and password", () => {
    const username = "popescu.ioanyahoo.com";
    const password = "pleaseWork123";
    const onSubmitMock = jest.fn();
    
    const component = Enzyme.mount(
      <ThemeProvider theme={themes.default}><Login onPress={onSubmitMock} /></ThemeProvider>
    );

    component.find("input.E-mail").simulate('change', { target: { value: username } })
    component.find("input.Password").simulate('change', { target: { value: password } })
    component.find("text.Login").simulate("onPress");

    console.log("onClickMock.mock", onSubmitMock.mock)
    expect(onSubmitMock).toBeCalled()
    expect(onSubmitMock).toHaveBeenCalledWith({
        username,
        password
        
        });
    });

  //verify if the user can loggin wiht password empty
  it("submits username and password", () => {
    const username = "popescu.ioan@yahoo.com";
    const password = "";
    const onSubmitMock = jest.fn();
    
    const component = Enzyme.mount(
      <ThemeProvider theme={themes.default}><Login onPress={onSubmitMock} /></ThemeProvider>
    );

    component.find("input.E-mail").simulate('change', { target: { value: username } })
    component.find("input.Password").simulate('change', { target: { value: password } })
    component.find("text.Login").simulate("onPress");

    console.log("onClickMock.mock", onSubmitMock.mock)
    expect(onSubmitMock).toBeCalled()
    expect(onSubmit).toHaveBeenCalledWith({
        username,
        password
        });
    });

  //verify if the user can loggin wiht both empty credentials
  it("submits username and password", () => {
    const username = "";
    const password = "";
    const onSubmitMock = jest.fn();
    
    const component = Enzyme.mount(
      <ThemeProvider theme={themes.default}><Login onPress={onSubmitMock} /></ThemeProvider>
    );

    component.find("input.E-mail").simulate('change', { target: { value: username } })
    component.find("input.Password").simulate('change', { target: { value: password } })
    component.find("text.Login").simulate("onPress");

    console.log("onClickMock.mock", onSubmitMock.mock)
    expect(onSubmitMock).toBeCalled()
  
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      username,
      password
    });
    });
});
