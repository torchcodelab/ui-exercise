import React from "react"
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from "./index";

configure({ adapter: new Adapter() });

test('Message contains one div', () => {
    const message = shallow(<Message message="<p>this is a test message</p>"/>);

    expect(message.find('div')).toHaveLength(1);
});
