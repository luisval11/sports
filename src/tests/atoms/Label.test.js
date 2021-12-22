import { mount, shallow } from "enzyme";
import { Banner } from "../../atoms/banner/Banner";
import LabelI from "../../atoms/label/Label";

describe("Test on Label", () => {
	test("should match initial snapshot", () => {
		let wrapper = shallow(<LabelI text="Label"/>);
		expect(wrapper).toMatchSnapshot();
	});

    test("should has the text 'Label'", () => {
        const text = "Label";
		let wrapper = mount(<LabelI text={text}/>);
        expect(wrapper.find('.form-label').text().trim()).toBe(text);
	});
    
});
